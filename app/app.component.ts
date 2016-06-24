import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TeamService } from './team.service';

import { TeamListComponent } from './team-list.component';
import { PlayerListComponent } from './player-list.component';
import { PlayerDetailComponent } from './player-detail.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, TeamService],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Teams']">Teams</a>
    </nav>
    <router-outlet></router-outlet>
    <team-list></team-list>
  `,
  styleUrls: ['app/app.component.css']
})

@RouteConfig([
  {
      path: '/teams',
      name: 'Teams',
      component: TeamListComponent,
      useAsDefault: true
  },
  {
    path: '/players/:team',
    name: 'Players',
    component: PlayerListComponent
  },
  {
    path: '/players/:team/:id',
    name: 'PlayerDetail',
    component: PlayerDetailComponent
  }
])

export class AppComponent {
  title = 'Estadísticas LFP';
}
