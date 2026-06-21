export type Language = 'en' | 'ru';

export interface NavItem {
  readonly key: 'about' | 'cv' | 'projects' | 'contacts';
  readonly route: string;
}

export interface ContentSectionData {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly items?: readonly string[];
}

export interface CvEntry {
  readonly date: string;
  readonly title: string;
  readonly description: string;
  readonly details?: readonly string[];
}

export interface ProjectItem {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly thumbnailLabel: string;
}

export interface PageCopy {
  readonly title: string;
  readonly intro?: readonly string[];
  readonly sections?: readonly ContentSectionData[];
}

export interface PortfolioTranslation {
  readonly shell: {
    readonly name: string;
    readonly role: string;
    readonly resumeLabel: string;
    readonly languageLabel: string;
    readonly nav: Record<NavItem['key'], string>;
  };
  readonly about: PageCopy;
  readonly cv: {
    readonly title: string;
    readonly intro: readonly string[];
    readonly entries: readonly CvEntry[];
  };
  readonly projects: {
    readonly title: string;
    readonly intro: readonly string[];
    readonly items: readonly ProjectItem[];
    readonly viewProjectLabel: string;
  };
  readonly contacts: PageCopy;
}
