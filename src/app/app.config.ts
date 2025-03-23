// src/app/app.config.ts
import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: MatIconRegistry,
      useFactory: (
        http: HttpClient,
        sanitizer: DomSanitizer,
        document: Document,
        errorHandler: ErrorHandler
      ) => {
        const registry = new MatIconRegistry(http, sanitizer, document, errorHandler);
        registry.addSvgIcon(
          'github',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
        );
        return registry;
      },
      deps: [
        HttpClient,         // _httpClient
        DomSanitizer,       // _sanitizer
        DOCUMENT,           // document
        ErrorHandler        // _errorHandler
      ]
    }
  ]
};