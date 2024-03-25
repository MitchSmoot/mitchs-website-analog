import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideFileRouter } from '@analogjs/router';

import { provideTrpcClient } from '../trpc-client';


export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideTrpcClient(),

  ],
};
