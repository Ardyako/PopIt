import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule, CARD_ROUTING_COMPONENTS } from './card-routing.module';
import { CardResolverResolver } from './card-resolver/card-resolver.resolver';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    CARD_ROUTING_COMPONENTS,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    CardResolverResolver,
  ]
})
export class CardModule { }
