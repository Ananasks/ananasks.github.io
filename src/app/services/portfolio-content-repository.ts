import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { parse } from 'yaml';

import { DEFAULT_PORTFOLIO_COPY } from '../data/portfolio-content';
import { Language, PortfolioTranslation } from '../models/portfolio';
import { applyTemplate } from './template-resolver';

@Injectable({ providedIn: 'root' })
export class PortfolioContentRepository {
  private readonly contentState = signal<Record<Language, PortfolioTranslation>>(DEFAULT_PORTFOLIO_COPY);

  readonly content = this.contentState.asReadonly();

  constructor(private readonly http: HttpClient) {}

  async loadAll(): Promise<void> {
    const [en, ru] = await Promise.all([this.loadLanguage('en'), this.loadLanguage('ru')]);
    this.contentState.set({ en, ru });
  }

  private async loadLanguage(language: Language): Promise<PortfolioTranslation> {
    const [shell, about, cv, projects, contacts] = await Promise.all([
      this.loadDocument<PortfolioTranslation['shell']>('identity', language),
      this.loadDocument<PortfolioTranslation['about']>('about', language),
      this.loadDocument<PortfolioTranslation['cv']>('cv', language),
      this.loadDocument<PortfolioTranslation['projects']>('projects', language),
      this.loadDocument<PortfolioTranslation['contacts']>('contacts', language),
    ]);

    return { shell, about, cv, projects, contacts };
  }

  private async loadDocument<T>(name: string, language: Language): Promise<T> {
    const [templateText, dataText] = await Promise.all([
      firstValueFrom(this.http.get(`/content/templates/${name}_template.yml`, { responseType: 'text' })),
      firstValueFrom(this.http.get(`/content/${language}/${name}.yml`, { responseType: 'text' })),
    ]);

    const template = parse(templateText) as unknown;
    const data = parse(dataText) as Record<string, unknown>;

    return applyTemplate<T>(template, data);
  }
}
