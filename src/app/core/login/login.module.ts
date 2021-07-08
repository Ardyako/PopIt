import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { LoginRoutingModule, LOGIN_ROUTING_COMPONENT } from './login-routing.module';


@NgModule({
  declarations: [
    LOGIN_ROUTING_COMPONENT,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class LoginModule { }
