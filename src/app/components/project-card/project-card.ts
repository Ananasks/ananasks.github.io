import { Component, input } from '@angular/core';

import { ProjectItem } from '../../models/portfolio';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly item = input.required<ProjectItem>();
  readonly ctaLabel = input.required<string>();
}
