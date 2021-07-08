import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LOGIN_PATH } from '../../login';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    }
    else {
      alert('Please, loggin!');
      this._router.navigate([LOGIN_PATH]);
      return false;
    }
  }

}