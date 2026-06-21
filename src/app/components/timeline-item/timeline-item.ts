import { Component, input } from '@angular/core';

import { CvEntry } from '../../models/portfolio';

@Component({
  selector: 'app-timeline-item',
  imports: [],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.scss',
})
export class TimelineItem {
  readonly entry = input.required<CvEntry>();
}
