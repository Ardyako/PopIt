import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card.component';

import { CardResolverResolver } from './card-resolver/card-resolver.resolver';

const routes: Routes = [
  {
    path: '', component: CardComponent,
    resolve: { cardDetails: CardResolverResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule { }

export const CARD_ROUTING_COMPONENTS = [CardComponent];
