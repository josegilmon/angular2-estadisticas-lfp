import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'team-list',
  templateUrl: 'app/team-list.component.html',
  styleUrls: ['app/team-list.component.css']
})

export class TeamListComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.getHeroes()
      .subscribe(
        teams => this.teams = teams
      );
  }

  gotoDetail(team: Team) {
    let link = ['Players', { id: team.id }];
    this.router.navigate(link);
  }
}
