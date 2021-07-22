import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _isLogged!: boolean;
  public get logged(): boolean {
    return this._isLogged;
  }

  public set logged(value: boolean) {
    this._isLogged = value;
  }

  public loggedIn(): boolean {
    return this.logged;
  }
}
