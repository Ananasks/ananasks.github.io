import { computed, Injectable, signal } from '@angular/core';

import { NAV_ITEMS, PORTFOLIO_COPY } from '../data/portfolio-content';
import { Language, NavItem } from '../models/portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioStore {
  readonly navItems: readonly NavItem[] = NAV_ITEMS;
  readonly languages: readonly Language[] = ['en', 'ru'];

  private readonly languageState = signal<Language>('en');

  readonly language = this.languageState.asReadonly();
  readonly copy = computed(() => PORTFOLIO_COPY[this.languageState()]);

  setLanguage(language: Language): void {
    this.languageState.set(language);
  }
}
