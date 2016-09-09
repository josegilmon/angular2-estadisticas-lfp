/**
 * Created by jagil on 8/9/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlayerService {

  private playersUrl = 'http://api.football-data.org/v1/competitions/436/teams';  // URL to web api

  constructor(private http: Http) { }

  getPlayers(url: string) {

    let headers = new Headers({
      'X-Auth-Token': '97a03c48247f456f8d1d9c8fd7de5ce6'
    });

    return this.http.get(url, { headers })
      .map( (response: Response) => response.json() )
      .toPromise()
      .catch( (err: any) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
