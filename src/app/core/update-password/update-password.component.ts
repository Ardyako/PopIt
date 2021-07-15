import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_PATH } from '../login';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UpdatePasswordValidator } from './update-password.validator';
import { AuthService } from '../auth/auth-service/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UpdatePasswordComponent implements OnInit {

  constructor(private _router: Router,
    private _authService: AuthService,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public get password(): AbstractControl | null {
    return this.updatePasswordForm.get('password');
  }

  public get confirmPassword(): AbstractControl | null {
    return this.updatePasswordForm.get('confirmPassword');
  }

  public get misMatch(): boolean {
    return this.updatePasswordForm.errors?.misMatch;
  }

  public updatePasswordForm = this._fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: UpdatePasswordValidator });

  public updateHandler(): void {
    this._authService.logged = false;
    this._router.navigate([LOGIN_PATH]);
  }

  public backHandler(): void {
    this._authService.logged = false;
    this._router.navigate([LOGIN_PATH]);
  }

}
