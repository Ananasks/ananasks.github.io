import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects', () => {
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
  });

  it('renders project cards with external repository links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    const links = Array.from(compiled.querySelectorAll('.project-card a')) as HTMLAnchorElement[];

    expect(cards.length).toBe(3);
    expect(links.every((link) => link.href.startsWith('https://github.com/'))).toBeTrue();
  });
});
