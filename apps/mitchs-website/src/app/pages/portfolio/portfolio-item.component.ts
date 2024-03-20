import { Component, Input } from '@angular/core';
import { PortfolioItem } from './portfolio.service';
import { TechIconComponent } from './tech-icon.component';

@Component({
  selector: 'mitchs-portfolio-item',
  standalone: true,
  imports: [TechIconComponent],
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio.scss'],
})
export default class PortfolioItemComponent {
  @Input() item: PortfolioItem | undefined = undefined;
}
