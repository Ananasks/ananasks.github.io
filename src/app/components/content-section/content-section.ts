import { Component, input } from '@angular/core';

import { ContentSectionData } from '../../models/portfolio';

@Component({
  selector: 'app-content-section',
  imports: [],
  templateUrl: './content-section.html',
  styleUrl: './content-section.scss',
})
export class ContentSection {
  readonly section = input.required<ContentSectionData>();
}
