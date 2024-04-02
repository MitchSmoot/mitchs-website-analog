import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import PortfolioItemComponent from './portfolio-item.component';
import TechChartComponent from './tech-chart.component';

@Component({
  selector: 'mitchs-website-analog-portfolio-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioItemComponent, TechChartComponent],
  templateUrl: 'portfolio-page.component.html',
  styleUrls: ['portfolio.scss'],
})
export default class PortfolioPageComponent {
  portfolioItems = inject(PortfolioService).portfolioItems;
  portfolioItemsTelenotes = inject(PortfolioService).portfolioItemsTelenotes;
  portfolioItemsTimpGrotto = inject(PortfolioService).portfolioItemsTimpGrotto;
  portfolioItemsFeatured = inject(PortfolioService).portfolioItemsFeatured;
}
