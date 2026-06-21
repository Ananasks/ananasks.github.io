import { NavItem, PortfolioTranslation } from '../models/portfolio';

export const NAV_ITEMS: readonly NavItem[] = [
  { key: 'about', route: '/about' },
  { key: 'cv', route: '/cv' },
  { key: 'projects', route: '/projects' },
  { key: 'contacts', route: '/contacts' },
];

export const DEFAULT_PORTFOLIO_COPY: Record<'en' | 'ru', PortfolioTranslation> = {
  en: {
    shell: {
      name: 'Alex North',
      role: 'Product designer and frontend engineer',
      resumeLabel: 'Save resume (PDF)',
      languageLabel: 'Language',
      resumeHref: '/resume-placeholder.pdf',
      photoAlt: 'Profile placeholder for Alex North',
      photoSrc: null,
      photoInitials: 'AN',
      nav: {
        about: 'About me',
        cv: 'CV',
        projects: 'Projects',
        contacts: 'Contacts',
      },
    },
    about: {
      title: 'ABOUT ME',
      intro: [
        'I shape digital products that feel quiet, focused, and easy to trust.',
        'My work usually sits between product thinking, interface systems, and frontend implementation.',
      ],
      sections: [
        {
          heading: 'APPROACH',
          paragraphs: [
            'I prefer clear structure, reduced visual noise, and interfaces that explain themselves. The best portfolio pieces often come from disciplined choices rather than extra decoration.',
            'In teams, I move comfortably between design direction, UI implementation, and content refinement.',
          ],
        },
        {
          heading: 'WHAT I VALUE',
          paragraphs: [
            'Consistency, legibility, and a calm user experience matter more to me than novelty for its own sake.',
          ],
          items: [
            'Thoughtful systems over one-off screens',
            'Readable components over clever abstractions',
            'Steady collaboration over performative process',
          ],
        },
      ],
    },
    cv: {
      title: 'CV',
      intro: ['A concise timeline of selected work, roles, and studies.'],
      entries: [
        {
          date: 'May 2024',
          title: 'Senior Product Designer',
          description:
            'Led redesign work for a multi-product SaaS platform with a focus on navigation clarity and design system adoption.',
          details: ['Introduced shared UI patterns', 'Reduced page-level visual noise'],
        },
        {
          date: 'January 2022',
          title: 'Frontend Engineer',
          description:
            'Built Angular interfaces for internal tools, portfolio sites, and lightweight content systems.',
          details: ['Worked across routing, state, and component architecture'],
        },
        {
          date: 'September 2019',
          title: 'Design Studies',
          description: 'Focused on visual communication, editorial systems, and interface fundamentals.',
        },
      ],
    },
    projects: {
      title: 'PROJECTS',
      intro: ['A small selection of concept work, experiments, and production-facing repositories.'],
      viewProjectLabel: 'Open repository',
      items: [
        {
          title: 'Quiet Grid',
          description:
            'A minimal dashboard system exploring strong hierarchy, whitespace, and neutral component styling.',
          href: 'https://github.com/example/quiet-grid',
          thumbnailLabel: 'QG',
        },
        {
          title: 'Mono Notes',
          description:
            'A focused note-taking interface with modular content sections and simple keyboard-first flows.',
          href: 'https://github.com/example/mono-notes',
          thumbnailLabel: 'MN',
        },
        {
          title: 'Nord Portfolio',
          description:
            'A portfolio starter that emphasizes editorial layouts, reusable sections, and low-friction maintenance.',
          href: 'https://github.com/example/nord-portfolio',
          thumbnailLabel: 'NP',
        },
      ],
    },
    contacts: {
      title: 'CONTACTS',
      intro: ['I am available for selected freelance work, in-house product roles, and design system consulting.'],
      sections: [
        {
          heading: 'REACH OUT',
          paragraphs: [
            'Email: hello@example.com',
            'GitHub: github.com/example',
            'Location: Europe, remote-friendly',
          ],
        },
        {
          heading: 'WORKING STYLE',
          paragraphs: ['I prefer small teams, direct communication, and clearly scoped product problems.'],
        },
      ],
    },
  },
  ru: {
    shell: {
      name: 'Alex North',
      role: 'Продуктовый дизайнер и frontend-разработчик',
      resumeLabel: 'Сохранить резюме (PDF)',
      languageLabel: 'Язык',
      resumeHref: '/resume-placeholder.pdf',
      photoAlt: 'Плейсхолдер профиля Alex North',
      photoSrc: null,
      photoInitials: 'AN',
      nav: {
        about: 'Обо мне',
        cv: 'Резюме',
        projects: 'Проекты',
        contacts: 'Контакты',
      },
    },
    about: {
      title: 'ОБО МНЕ',
      intro: [
        'Я проектирую цифровые продукты, которые выглядят спокойно, собранно и вызывают доверие.',
        'Обычно моя работа находится на стыке продуктового мышления, интерфейсных систем и frontend-реализации.',
      ],
      sections: [
        {
          heading: 'ПОДХОД',
          paragraphs: [
            'Мне близки ясная структура, минимум визуального шума и интерфейсы, которые объясняют себя сами. Лучшие проекты рождаются из дисциплины, а не из лишнего декора.',
            'В командах я одинаково уверенно работаю с визуальным направлением, UI-реализацией и редактированием контента.',
          ],
        },
        {
          heading: 'ЧТО ДЛЯ МЕНЯ ВАЖНО',
          paragraphs: [
            'Последовательность, читаемость и спокойный пользовательский опыт для меня важнее новизны ради новизны.',
          ],
          items: [
            'Продуманные системы вместо разрозненных экранов',
            'Понятные компоненты вместо эффектных абстракций',
            'Спокойная совместная работа вместо демонстративных процессов',
          ],
        },
      ],
    },
    cv: {
      title: 'РЕЗЮМЕ',
      intro: ['Краткая хронология ролей, проектов и обучения.'],
      entries: [
        {
          date: 'Май 2024',
          title: 'Senior Product Designer',
          description:
            'Руководил редизайном multi-product SaaS платформы с акцентом на понятную навигацию и внедрение дизайн-системы.',
          details: ['Внедрил общие UI-паттерны', 'Снизил визуальный шум на уровне страниц'],
        },
        {
          date: 'Январь 2022',
          title: 'Frontend Engineer',
          description:
            'Разрабатывал Angular-интерфейсы для внутренних инструментов, портфолио-сайтов и компактных контентных систем.',
          details: ['Работал с роутингом, состоянием и архитектурой компонентов'],
        },
        {
          date: 'Сентябрь 2019',
          title: 'Design Studies',
          description:
            'Изучал визуальные коммуникации, редакционные системы и основы интерфейсного дизайна.',
        },
      ],
    },
    projects: {
      title: 'ПРОЕКТЫ',
      intro: ['Небольшая подборка концептов, экспериментов и репозиториев, связанных с реальными продуктами.'],
      viewProjectLabel: 'Открыть репозиторий',
      items: [
        {
          title: 'Quiet Grid',
          description:
            'Минималистичная система дашбордов с сильной иерархией, большим количеством воздуха и нейтральной стилистикой компонентов.',
          href: 'https://github.com/example/quiet-grid',
          thumbnailLabel: 'QG',
        },
        {
          title: 'Mono Notes',
          description:
            'Сфокусированный интерфейс для заметок с модульными секциями контента и простыми keyboard-first сценариями.',
          href: 'https://github.com/example/mono-notes',
          thumbnailLabel: 'MN',
        },
        {
          title: 'Nord Portfolio',
          description:
            'Стартовый шаблон портфолио с редакционной версткой, переиспользуемыми секциями и простым сопровождением.',
          href: 'https://github.com/example/nord-portfolio',
          thumbnailLabel: 'NP',
        },
      ],
    },
    contacts: {
      title: 'КОНТАКТЫ',
      intro: [
        'Я открыт к точечным freelance-проектам, продуктовым ролям в команде и консультациям по дизайн-системам.',
      ],
      sections: [
        {
          heading: 'НАПИСАТЬ МНЕ',
          paragraphs: [
            'Email: hello@example.com',
            'GitHub: github.com/example',
            'Локация: Европа, возможна удаленная работа',
          ],
        },
        {
          heading: 'ФОРМАТ РАБОТЫ',
          paragraphs: ['Мне ближе небольшие команды, прямое общение и хорошо очерченные продуктовые задачи.'],
        },
      ],
    },
  },
};
