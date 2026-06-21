import { Location } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';
import { PortfolioContentRepository } from './services/portfolio-content-repository';
import { createPortfolioContentRepositoryStub } from './services/portfolio-content-repository.stub';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        {
          provide: PortfolioContentRepository,
          useValue: createPortfolioContentRepositoryStub(),
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(App);

    await router.navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('redirects the root route to /about', () => {
    expect(location.path()).toBe('/about');
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('ABOUT ME');
  });

  it('navigates to a page when a menu link is clicked', async () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.menu__link'),
    ) as HTMLAnchorElement[];

    links[2].click();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(location.path()).toBe('/projects');
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('PROJECTS');
  });

  it('switches the UI copy to russian without a reload', async () => {
    const buttons = Array.from(
      fixture.nativeElement.querySelectorAll('.language-button'),
    ) as HTMLButtonElement[];

    buttons[1].click();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.menu__link')?.textContent).toContain('Обо мне');
    expect(compiled.querySelector('h1')?.textContent).toContain('ОБО МНЕ');
  });
});
