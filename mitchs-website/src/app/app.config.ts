import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideFileRouter } from '@analogjs/router';

import { provideTrpcClient } from '../trpc-client';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideTrpcClient(),

  ],
};
