import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// inject vercel analytics
import { inject } from '@vercel/analytics';
inject();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);