
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  Provider
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { JwtInterceptor } from './utils/jwt-interceptor';

export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptorsFromDi()),
    authInterceptProvider
  ]
};
