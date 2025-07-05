import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { LandingPageComponent } from './landing/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'project/:projectId',
    component: ProjectComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
