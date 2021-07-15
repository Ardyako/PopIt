import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule, CARD_ROUTING_COMPONENTS } from './card-routing.module';
import { CardResolverResolver } from './card-resolver/card-resolver.resolver';

import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CARD_ROUTING_COMPONENTS,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    SharedModule,
  ],
  providers: [
    CardResolverResolver,
  ]
})
export class CardModule { }
