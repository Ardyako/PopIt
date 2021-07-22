import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  private readonly URL: string = 'http://localhost:3000';

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request.clone({
      url: `${this.URL}/${request.url}`,
    }));
  }
}
