import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from '../loader-service/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  public constructor(public loaderService: LoaderService) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.isLoader.next(true);

    return next.handle(request).pipe(
      finalize(
        () => {
          this.loaderService.isLoader.next(false);
        },
      ),
    );
  }
}
