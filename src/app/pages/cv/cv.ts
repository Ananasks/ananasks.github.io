import { Component, inject } from '@angular/core';

import { TimelineItem } from '../../components/timeline-item/timeline-item';
import { PortfolioStore } from '../../services/portfolio-store';

@Component({
  selector: 'app-cv',
  imports: [TimelineItem],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  protected readonly copy = inject(PortfolioStore).copy;
}
