import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DASHBOARD_PATH } from 'src/app/features/dashboard';
import { AuthService } from '../auth/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _router: Router, private _authService: AuthService) { }

  public loginHandler(): void {
    this._authService.logged = true;
    this._router.navigate([DASHBOARD_PATH]);
  }

  public singInHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

}
