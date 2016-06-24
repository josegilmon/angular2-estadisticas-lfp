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
var team_service_1 = require('./team.service');
var player_detail_component_1 = require('./player-detail.component');
var PlayerListComponent = (function () {
    function PlayerListComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.addingHero = false;
    }
    PlayerListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PlayerListComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    PlayerListComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    PlayerListComponent.prototype.delete = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PlayerListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    PlayerListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    };
    PlayerListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'player-list',
            templateUrl: 'player-list.component.html',
            styleUrls: ['player-list.component.css'],
            directives: [player_detail_component_1.PlayerDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, team_service_1.TeamService])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=player-list.component.js.map