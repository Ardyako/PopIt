import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';


import { WindowService } from '@mf-app/shared/window-service/window.service';

import { ERROR_PAGE_PATH } from '@mf-app/core/error-page/error-page';


@Injectable()
export class ExceptionHandler extends ErrorHandler {

  public constructor(
    private _router: Router,
    private _ngZone: NgZone,
    private _windowService: WindowService,
  ) {
    super();
  }

  public handleError(error: Error): void {
    this._ngZone.run(() =>
      this._router.navigateByUrl(`${ERROR_PAGE_PATH}`).then(() => {
        if (!this._router.url.includes(`${ERROR_PAGE_PATH}`)) {
          this._windowService.nativeWindow.location.href = `${ERROR_PAGE_PATH}`;
        }
      }));
    super.handleError(error);
  }
}
