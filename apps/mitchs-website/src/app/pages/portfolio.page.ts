import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mitchs-website-analog-portfolio-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfolio/portfolio-page.component.html',
  styleUrls: ['./portfolio/portfolio-page.component.scss'],
})
export default class PortfolioPageComponent {}
