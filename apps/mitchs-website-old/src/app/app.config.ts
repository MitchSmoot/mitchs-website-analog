import { ApplicationConfig } from '@angular/core';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient } from '@angular/common/http';
import { provideContent, withMarkdownRenderer } from '@analogjs/content'

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    provideContent(withMarkdownRenderer())
  ],
};
