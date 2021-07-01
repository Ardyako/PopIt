import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule, LOGIN_ROUTING_COMPONENT } from './login-routing.module';


@NgModule({
  declarations: [
    LOGIN_ROUTING_COMPONENT,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
