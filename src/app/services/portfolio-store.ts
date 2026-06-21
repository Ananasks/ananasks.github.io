import { computed, Injectable, signal } from '@angular/core';

import { NAV_ITEMS } from '../data/portfolio-content';
import { Language, NavItem } from '../models/portfolio';
import { PortfolioContentRepository } from './portfolio-content-repository';

@Injectable({ providedIn: 'root' })
export class PortfolioStore {
  readonly navItems: readonly NavItem[] = NAV_ITEMS;
  readonly languages: readonly Language[] = ['en', 'ru'];

  private readonly languageState = signal<Language>('en');

  readonly language = this.languageState.asReadonly();

  constructor(private readonly repository: PortfolioContentRepository) {}

  readonly copy = computed(() => this.repository.content()[this.languageState()]);

  setLanguage(language: Language): void {
    this.languageState.set(language);
  }
}
