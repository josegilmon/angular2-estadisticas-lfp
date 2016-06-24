import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Team }        from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'player-detail',
  templateUrl: 'player-detail.component.html',
  styleUrls: ['player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {

  @Input() hero: Team;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: TeamService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Team();
    }
  }

  save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedHero: Team = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}
