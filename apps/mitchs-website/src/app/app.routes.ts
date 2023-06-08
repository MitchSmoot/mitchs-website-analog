import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UserFormComponent } from './auth/user-form/user-form.component';

export const appRoutes: Route[] = [
  {path: '', loadComponent: () => import('./pages/(home)/index.page').then(mod => mod.HomePageComponent)},
  {path: 'blog', loadChildren: () => import('./blog/blog-routes').then(mod => mod.BLOG_ROUTES)},
  {path: 'portfolio', loadChildren: () => import('./pages/(portfolio)/portfolio-routes').then(mod => mod.PORTFOLIO_ROUTES)},
  {path: 'nx', component: NxWelcomeComponent},
  {path: 'auth', component: UserFormComponent},
  {path: 'radio', loadComponent: () => import('./pages/(radio)/radio.page').then(mod => mod.RadioPageComponent)},
  {path: 'caving', loadComponent: () => import('./pages/(caving)/caving.page').then(mod => mod.CavingPageComponent)}
];
