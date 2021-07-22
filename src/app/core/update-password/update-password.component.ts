import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth-service/auth.service';

import { LOGIN_PATH } from '../login';
import { UPDATE_PASSWORD_VALIDATOR } from './update-password.validator';


@Component({
  selector: 'mf-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UpdatePasswordComponent {

  public updatePasswordForm = this._fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validator: UPDATE_PASSWORD_VALIDATOR,
  });

  public constructor(
    @Inject(String) private _router: Router,
    private _authService: AuthService,
    private _fb: FormBuilder,
  ) { }


  public get password(): AbstractControl | null {
    return this.updatePasswordForm.get('password');
  }

  public get confirmPassword(): AbstractControl | null {
    return this.updatePasswordForm.get('confirmPassword');
  }

  public get misMatch(): boolean {
    return this.updatePasswordForm.errors?.misMatch;
  }

  public updateHandler(): void {
    this._authService.logged = false;
    this._router.navigate([LOGIN_PATH]);
  }

  public backHandler(): void {
    this._authService.logged = false;
    this._router.navigate([LOGIN_PATH]);
  }

}
