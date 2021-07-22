import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule, LOGIN_ROUTING_COMPONENT } from './login-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';


@NgModule({
  declarations: [
    LOGIN_ROUTING_COMPONENT,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
  ],
})
export class LoginModule { }
