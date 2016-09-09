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
 * Created by jagil on 8/9/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
        this.playersUrl = 'http://api.football-data.org/v1/competitions/436/teams'; // URL to web api
    }
    PlayerService.prototype.getPlayers = function (url) {
        var headers = new http_1.Headers({
            'X-Auth-Token': '97a03c48247f456f8d1d9c8fd7de5ce6'
        });
        return this.http.get(url, { headers: headers })
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(function (err) {
            console.log(err);
            return Promise.reject(err);
        });
    };
    PlayerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Rx_1.Observable.throw(error.message || error);
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map