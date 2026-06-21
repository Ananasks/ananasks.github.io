import { Routes } from '@angular/router';

import { About } from './pages/about/about';
import { Contacts } from './pages/contacts/contacts';
import { Cv } from './pages/cv/cv';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'cv',
    component: Cv,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contacts',
    component: Contacts,
  },
];
