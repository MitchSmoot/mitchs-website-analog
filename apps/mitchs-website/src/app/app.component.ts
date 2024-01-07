import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, MainNavComponent],
  selector: 'mitchs-website-root',
  template: `
  <main-nav />
  <router-outlet />
  `,
})
export class AppComponent {
  title = 'mitchs-website';
}
