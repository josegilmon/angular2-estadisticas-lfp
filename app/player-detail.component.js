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
var router_deprecated_1 = require('@angular/router-deprecated');
var team_1 = require('./team');
var team_service_1 = require('./team.service');
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id)
                .then(function (hero) { return _this.hero = hero; });
        }
        else {
            this.navigated = false;
            this.hero = new team_1.Team();
        }
    };
    PlayerDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PlayerDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', team_1.Team)
    ], PlayerDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlayerDetailComponent.prototype, "close", void 0);
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: 'player-detail',
            templateUrl: 'player-detail.component.html',
            styleUrls: ['player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_deprecated_1.RouteParams])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map