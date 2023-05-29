import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UserFormComponent } from './auth/user-form/user-form.component';

export const appRoutes: Route[] = [
  {path: '', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)},
  {path: 'blog', loadChildren: () => import('./blog/blog-routes').then(mod => mod.BLOG_ROUTES)},
  {path: 'portfolio', loadChildren: () => import('./portfolio/portfolio-routes').then(mod => mod.PORTFOLIO_ROUTES)},
  {path: 'nx', component: NxWelcomeComponent},
  {path: 'auth', component: UserFormComponent},
  {path: 'radio', loadComponent: () => import('./pages/radio-page/radio-page.component').then(mod => mod.RadioPageComponent)},
  {path: 'caving', loadComponent: () => import('./pages/caving-page/caving-page.component').then(mod => mod.CavingPageComponent)}
];
