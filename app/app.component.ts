import { Component } from '@angular/core';
import { TeamListComponent } from './team-list.component';

@Component({
    selector: 'my-app',
    template: `
      <!-- Routed views go here -->
      <router-outlet></router-outlet>
    `
})

export class AppComponent {

}
