import { Component, inject } from '@angular/core';

import { ContentSection } from '../../components/content-section/content-section';
import { PortfolioStore } from '../../services/portfolio-store';

@Component({
  selector: 'app-contacts',
  imports: [ContentSection],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  protected readonly copy = inject(PortfolioStore).copy;
}
