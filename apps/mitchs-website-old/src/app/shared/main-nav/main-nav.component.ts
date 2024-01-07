import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService } from '../../services/app.service';
import { HideinProdDirective } from '../hide-in-prod.directive';

@Component({
  selector: 'main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, HideinProdDirective],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  constructor(private appService: AppService) {}

  isDarkModeActive: Signal<boolean> = this.appService.darkMode;
  environment: Signal<string> = this.appService.environment;

  darkModeToggle() {
    this.appService.toggleDarkMode();
  }
}
