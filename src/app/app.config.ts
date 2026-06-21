import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PortfolioContentRepository } from './services/portfolio-content-repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [PortfolioContentRepository],
      useFactory: (repository: PortfolioContentRepository) => () => repository.loadAll(),
    },
  ]
};
