import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { TeamService } from "./team.service";
import { PlayerService } from "./player.service";
import { TeamListComponent } from "./team-list.component";
import { TeamDetailComponent } from "./team-detail.component";

@NgModule({
  imports: [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, TeamListComponent, TeamDetailComponent ],
  providers: [ appRoutingProviders, TeamService, PlayerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
