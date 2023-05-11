import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  standalone: true,
  imports: [RouterModule, MainNavComponent],
  selector: 'mitchs-website-analog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mitchs-website';
}
