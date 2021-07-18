import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth-guard/auth.guard';
import { CARD_PATH } from './features/card';
import { CARD_EDITOR_PATH } from './features/card-editor';
import { DASHBOARD_PATH } from './features/dashboard';

const routes: Routes = [
  {
    path: `${CARD_PATH}/:id`,
    canActivate: [AuthGuard],
    loadChildren: (): Promise<unknown> => import('./features/card/card.module')
      .then(m => m.CardModule),
  },
  {
    path: `${CARD_EDITOR_PATH}/:id`,
    canActivate: [AuthGuard],
    loadChildren: (): Promise<unknown> => import('./features/card-editor/card-editor.module')
      .then(m => m.CardEditorModule),
  },
  {
    path: DASHBOARD_PATH,
    canActivate: [AuthGuard],
    loadChildren: (): Promise<unknown> => import('./features/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
