import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  constructor(private appService: AppService) {}

  isDarkModeActive: Signal<boolean> = this.appService.darkMode;

  darkModeToggle() {
    this.appService.toggleDarkMode();
  }
}
