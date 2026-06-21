import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContentRepository } from '../../services/portfolio-content-repository';
import { createPortfolioContentRepositoryStub } from '../../services/portfolio-content-repository.stub';
import { Cv } from './cv';

describe('Cv', () => {
  let fixture: ComponentFixture<Cv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cv],
      providers: [
        {
          provide: PortfolioContentRepository,
          useValue: createPortfolioContentRepositoryStub(),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Cv);
    fixture.detectChanges();
  });

  it('renders the timeline entries with a rail and dots', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.timeline-item').length).toBe(3);
    expect(compiled.querySelectorAll('.timeline-item__dot').length).toBe(3);
    expect(compiled.textContent).toContain('May 2024');
  });
});
