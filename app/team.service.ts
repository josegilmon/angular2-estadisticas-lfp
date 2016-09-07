import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { Team } from './team';

@Injectable()
export class TeamService {

  private teamsUrl = 'http://api.football-data.org/v1/soccerseasons/354/fixtures/?matchday=22';  // URL to web api

  constructor(private http: Http) { }

/*
  getHeroes(): Promise<Team[]> {
    return this.http.get(this.teamsUrl)
      .toPromise()
      .then(response => response.json().data)np
      .catch(this.handleError);
  }

  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
 */
  getHeroes(): Observable<Team[]> {
    return this.http.get(this.teamsUrl)
      .map(
        response => response.json().data
      )
      .catch(this.handleError);
  }

  save(hero: Team): Promise<Team>  {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Team): Promise<Team> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.teamsUrl}/${hero.id}`;
    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Team
  private post(hero: Team): Promise<Team> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
      .post(this.teamsUrl, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Team
  private put(hero: Team) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.teamsUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
/*
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
*/
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
