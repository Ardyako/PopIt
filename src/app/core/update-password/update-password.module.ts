import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdatePasswordRoutingModule, UPDATE_PASSWORD_COMPONENT } from './update-password-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UPDATE_PASSWORD_COMPONENT
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpdatePasswordRoutingModule,
    SharedModule,
  ]
})
export class UpdatePasswordModule { }
