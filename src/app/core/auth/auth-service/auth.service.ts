import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public logged!: boolean;

  public loggedIn() {
    return this.logged;
  }
}
