/**
 * Created by jagil on 24/6/16.
 */
import { Component, Input } from '@angular/core';

import { Team } from './team';

@Component({
  selector: 'team-detail',
  templateUrl: 'app/team.component.html'
})

export class TeamComponent {

  @Input()
  team: Team;

};
