/**
 * Created by jagil on 7/9/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'team-list',
  templateUrl: 'app/team-list.component.html',
  styleUrls: ['app/team-list.component.css']
})

export class TeamListComponent implements OnInit {

  teams: Team[];

  constructor(
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.getTeams()
      .then(
        data => {
          this.teams = data.teams
          console.log( this.teams )
        }
      );
  }

  gotoDetail(team: Team) {
    let link = ['team', team.code];
    this.router.navigate(link);
  }
}
