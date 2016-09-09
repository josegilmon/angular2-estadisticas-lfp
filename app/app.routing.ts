/**
 * Created by jagil on 8/9/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from "./team-list.component";
import { TeamDetailComponent } from "./team-detail.component";

const appRoutes: Routes = [
  { path: '', component: TeamListComponent },
  { path: 'team/:id', component: TeamDetailComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
