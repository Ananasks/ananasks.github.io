import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Language } from './models/portfolio';
import { PortfolioStore } from './services/portfolio-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly store = inject(PortfolioStore);

  protected readonly navItems = this.store.navItems;
  protected readonly languages = this.store.languages;
  protected readonly copy = this.store.copy;
  protected readonly currentLanguage = computed(() => this.store.language());

  protected setLanguage(language: Language): void {
    this.store.setLanguage(language);
  }
}
