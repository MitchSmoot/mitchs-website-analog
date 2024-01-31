import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from './portfolio/portfolio.service';
import PortfolioItemComponent from './portfolio/portfolio-item.component';
import TechChartComponent from './portfolio/tech-chart.component';

@Component({
  selector: 'mitchs-website-analog-portfolio-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioItemComponent, TechChartComponent],
  templateUrl: './portfolio/portfolio-page.component.html',
  styleUrls: ['./portfolio/portfolio.scss'],
})
export default class PortfolioPageComponent {
  portfolioItems = inject(PortfolioService).portfolioItems;
}
