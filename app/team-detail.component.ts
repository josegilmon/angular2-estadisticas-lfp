/**
 * Created by jagil on 8/9/16.
 */
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {Subscription} from "rxjs";

import {TeamService} from "./team.service";
import {PlayerService} from "./player.service";

import {Team} from "./team";

@Component({
  selector: 'team-detail',
  templateUrl: 'app/team-detail.component.html',
  styleUrls:  ['app/team-detail.component.css']
})

export class TeamDetailComponent implements OnInit {

  team: Team;
  error: any;

  private sub: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
    private playerService: PlayerService
  ) { }

  getTeam(id: string) {
    this.teamService
      .getTeam(id)
      .then(
        team => this.team = team
      )
      .catch(error => this.error = error); // TODO: Display error message
  }

  getPlayers() {
    this.playerService
      .getPlayers(this.team.links.players)
      .then(players => this.team.players = players)
      .catch(error => this.error = error); // TODO: Display error message
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      let id = params['id']; // (+) converts string 'id' to a number
      this.getTeam(id).then(team => this.team = team);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
