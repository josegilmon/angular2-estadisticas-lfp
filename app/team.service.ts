/**
 * Created by jagil on 7/9/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Team } from './team';

@Injectable()
export class TeamService {

  private teamsUrl = 'http://api.football-data.org/v1/competitions/436/teams';  // URL to web api

  constructor(private http: Http) { }

  getTeams() {

    let headers = new Headers({
      'X-Auth-Token': '97a03c48247f456f8d1d9c8fd7de5ce6'
    });

    return this.http.get(this.teamsUrl, { headers })
      .map( (response: Response) => response.json() )
      .toPromise()
      .catch( (err: any) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  getTeam(id: string) {
    return this.getTeams()
      .then( data => {
        let teams = data.teams.filter((team: Team) => team.code == id);
        return teams[0];
      } );
  }

  /*
  delete(team: Team): Promise<void> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.teamsUrl}/${team.code}`;
    return this.http
      .delete(url, headers)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  save(team: Team): Promise<Team>  {
    if (team.code) {
      return this.put(team);
    }
    return this.post(team);
  }

  // Add new Team
  private post(team: Team): Promise<Team> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
      .post(this.teamsUrl, JSON.stringify(team), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Team
  private put(team: Team) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.teamsUrl}/${team.code}`;
    return this.http
      .put(url, JSON.stringify(team), {headers: headers})
      .toPromise()
      .then(() => team)
      .catch(this.handleError);
  }
  */

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
