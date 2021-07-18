import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardEditorComponent } from './card-editor.component';

const routes: Routes = [
  {
    path: '', component: CardEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardEditorRoutingModule { }

export const CARD_ROUTING_COMPONENTS = [CardEditorComponent];

