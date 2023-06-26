import { ApplicationConfig } from '@angular/core';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideFileRouter(), provideHttpClient()],
};
