
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const path = new URL(request.url, window.location.origin).pathname;

    const isAuthAPI =
      path === '/api/login' ||
      path === '/api/register';

    if (this.authenticationService.isLoggedIn() && !isAuthAPI) {

      const token = this.authenticationService.getToken();

      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
