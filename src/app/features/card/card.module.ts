import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule, CARD_ROUTING_COMPONENTS } from './card-routing.module';


@NgModule({
  declarations: [
    CARD_ROUTING_COMPONENTS,
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
