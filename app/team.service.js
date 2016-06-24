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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.teamsUrl = 'http://api.football-data.org/v1/soccerseasons/354/fixtures/?matchday=22'; // URL to web api
    }
    /*
      getHeroes(): Promise<Team[]> {
        return this.http.get(this.teamsUrl)
          .toPromise()
          .then(response => response.json().data)
          .catch(this.handleError);
      }
    
      getHero(id: number) {
        return this.getHeroes()
          .then(heroes => heroes.filter(hero => hero.id === id)[0]);
      }
     */
    TeamService.prototype.getHeroes = function () {
        return this.http.get(this.teamsUrl)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.save = function (hero) {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    };
    TeamService.prototype.delete = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.teamsUrl + "/" + hero.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Team
    TeamService.prototype.post = function (hero) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.teamsUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Team
    TeamService.prototype.put = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.teamsUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    /*
      private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
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