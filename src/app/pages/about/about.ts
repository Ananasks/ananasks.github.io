import { Component, inject } from '@angular/core';

import { ContentSection } from '../../components/content-section/content-section';
import { PortfolioStore } from '../../services/portfolio-store';

@Component({
  selector: 'app-about',
  imports: [ContentSection],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly copy = inject(PortfolioStore).copy;
}
