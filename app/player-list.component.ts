import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import { Team }                from './team';
import { TeamService }         from './team.service';
import { PlayerDetailComponent } from './player-detail.component';

@Component({
  selector: 'player-list',
  templateUrl: 'player-list.component.html',
  styleUrls:  ['player-list.component.css'],
  directives: [PlayerDetailComponent]
})

export class PlayerListComponent implements OnInit {
  heroes: Team[];
  selectedHero: Team;
  addingHero = false;
  error: any;
  constructor(
      private router: Router,
      private heroService: TeamService) { }
  getHeroes() {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(error => this.error = error); // TODO: Display error message
  }
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }
  close(savedHero: Team) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }
  delete(hero: Team, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Team) {
    this.selectedHero = hero;
    this.addingHero = false;
  }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
