import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {path: 'blog', loadChildren: () => import('./blog/blog-routes').then(mod => mod.BLOG_ROUTES)},
  {path: 'portfolio', loadChildren: () => import('./portfolio/portfolio-routes').then(mod => mod.PORTFOLIO_ROUTES)},
  {path: 'nx', component: NxWelcomeComponent}
];
