import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): string {
    return 'xx.yy.zz';
  }

}
