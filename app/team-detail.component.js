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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var team_service_1 = require("./team.service");
var player_service_1 = require("./player.service");
var TeamDetailComponent = (function () {
    function TeamDetailComponent(route, router, teamService, playerService) {
        this.route = route;
        this.router = router;
        this.teamService = teamService;
        this.playerService = playerService;
    }
    TeamDetailComponent.prototype.getTeam = function (id) {
        var _this = this;
        this.teamService
            .getTeam(id)
            .then(function (team) { return _this.team = team; })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    TeamDetailComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService
            .getPlayers(this.team.links.players)
            .then(function (players) { return _this.team.players = players; })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    TeamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.getTeam(id).then(function (team) { return _this.team = team; });
        });
    };
    TeamDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeamDetailComponent = __decorate([
        core_1.Component({
            selector: 'team-detail',
            templateUrl: 'app/team-detail.component.html',
            styleUrls: ['app/team-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, team_service_1.TeamService, player_service_1.PlayerService])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=team-detail.component.js.map