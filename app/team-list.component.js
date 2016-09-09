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
var router_1 = require('@angular/router');
var team_service_1 = require('./team.service');
var TeamListComponent = (function () {
    function TeamListComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeams()
            .then(function (data) {
            _this.teams = data.teams;
            console.log(_this.teams);
        });
    };
    TeamListComponent.prototype.gotoDetail = function (team) {
        var link = ['team', team.code];
        this.router.navigate(link);
    };
    TeamListComponent = __decorate([
        core_1.Component({
            selector: 'team-list',
            templateUrl: 'app/team-list.component.html',
            styleUrls: ['app/team-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, team_service_1.TeamService])
    ], TeamListComponent);
    return TeamListComponent;
}());
exports.TeamListComponent = TeamListComponent;
//# sourceMappingURL=team-list.component.js.map