import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthService } from '@mf-app/core/auth/auth-service/auth.service';

import { AuthGuard } from '@mf-app/core/auth/auth-guard/auth.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
})
export class AuthModule { }
