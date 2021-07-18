import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth-service/auth.service';

import { DASHBOARD_PATH } from 'src/app/features/dashboard';

import { UPDATE_PASSWORD_PATH } from '../update-password';

@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  public loginForm!: FormBuilder;

  public constructor(
    private _router: Router,
    private _authService: AuthService,
    private _fb: FormBuilder,
  ) {
    this.loginForm = this._fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public get login(): AbstractControl | null {
    return this.loginForm.get('login');
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  this.loginForm = this._fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public loginHandler(): void {
    this._authService.logged = true;
    this._router.navigate([DASHBOARD_PATH]);
  }

  public singInHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

  public updatePasswordHandler(): void {
    this._authService.logged = true;
    this._router.navigate([UPDATE_PASSWORD_PATH]);
  }

}
