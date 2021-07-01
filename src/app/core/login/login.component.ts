import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DASHBOARD_PATH } from 'src/app/features/dashboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _router: Router) { }

  public loginHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

}
