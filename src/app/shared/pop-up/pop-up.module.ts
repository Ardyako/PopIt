import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopUpComponent } from '@mf-app/shared/pop-up/pop-up.component';

import { SharedModule } from '@mf-app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopUpComponent,
    SharedModule,
  ],
})
export class PopUpModule { }
