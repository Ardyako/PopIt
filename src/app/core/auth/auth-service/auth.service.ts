import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _logged!: boolean;
  public get logged(): boolean {
    return this._logged;
  }

  public set logged(value: boolean) {
    this._logged = value;
  }

  public loggedIn(): boolean {
    return this.logged;
  }
}
