import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';

import { LOGIN_PATH } from '../../login';

@Injectable()
export class AuthGuard implements CanActivate {

  private constructor(private _authService: AuthService, private _router: Router) { }

  public canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    }

    this._router.navigate([LOGIN_PATH]);
    return false;

  }

}
