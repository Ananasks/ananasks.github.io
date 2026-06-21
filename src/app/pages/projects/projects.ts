import { Component, inject } from '@angular/core';

import { ProjectCard } from '../../components/project-card/project-card';
import { PortfolioStore } from '../../services/portfolio-store';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly copy = inject(PortfolioStore).copy;
}
