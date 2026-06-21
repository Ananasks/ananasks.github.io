import { signal } from '@angular/core';

import { DEFAULT_PORTFOLIO_COPY } from '../data/portfolio-content';

export function createPortfolioContentRepositoryStub() {
  return {
    content: signal(DEFAULT_PORTFOLIO_COPY).asReadonly(),
    loadAll: async () => undefined,
  };
}
