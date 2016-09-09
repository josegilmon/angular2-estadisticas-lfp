"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jagil on 7/9/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.teamsUrl = 'http://api.football-data.org/v1/competitions/436/teams'; // URL to web api
    }
    TeamService.prototype.getTeams = function () {
        var headers = new http_1.Headers({
            'X-Auth-Token': '97a03c48247f456f8d1d9c8fd7de5ce6'
        });
        return this.http.get(this.teamsUrl, { headers: headers })
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(function (err) {
            console.log(err);
            return Promise.reject(err);
        });
    };
    TeamService.prototype.getTeam = function (id) {
        return this.getTeams()
            .then(function (data) {
            var teams = data.teams.filter(function (team) { return team.code == id; });
            return teams[0];
        });
    };
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
    TeamService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Rx_1.Observable.throw(error.message || error);
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map