import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule, CARD_ROUTING_COMPONENTS } from './card-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';

import { CardResolverResolver } from './card-resolver/card-resolver.resolver';


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
  ],
})
export class CardModule { }
