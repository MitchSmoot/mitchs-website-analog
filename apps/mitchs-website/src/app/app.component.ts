import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, MainNavComponent],
  selector: 'mitchs-website-analog-root',
  template: `
  <main-nav />
  <router-outlet />
  `
})
export class AppComponent {
  title = 'mitchs-website';
}
