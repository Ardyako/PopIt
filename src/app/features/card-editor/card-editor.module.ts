import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardEditorRoutingModule, CARD_ROUTING_COMPONENTS } from './card-editor-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CARD_ROUTING_COMPONENTS,
  ],
  imports: [
    CommonModule,
    CardEditorRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CardEditorModule { }
