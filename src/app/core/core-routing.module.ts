import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ERROR_PAGE_PATH } from '@mf-app/core/error-page/error-page';

import { AuthGuard } from './auth/auth-guard/auth.guard';
import { LOGIN_PATH } from './login';
import { PAGE_NOT_FOUND_PATH } from './page-not-found';
import { UPDATE_PASSWORD_PATH } from './update-password';

const routes: Routes = [
  {
    path: ERROR_PAGE_PATH,
    loadChildren: (): Promise<unknown> => import('./error-page/error-page/error-page.module')
      .then(m => m.ErrorPageModule),
  },
  {
    path: '',
    redirectTo: LOGIN_PATH,
    pathMatch: 'full',
  },
  {
    path: LOGIN_PATH,
    loadChildren: (): Promise<unknown> => import('./login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: UPDATE_PASSWORD_PATH,
    canActivate: [AuthGuard],
    loadChildren: (): Promise<unknown> => import('./update-password/update-password.module')
      .then(m => m.UpdatePasswordModule),
  },
  {
    path: PAGE_NOT_FOUND_PATH,
    loadChildren: (): Promise<unknown> => import('./page-not-found/page-not-found.module')
      .then(m => m.PageNotFoundModule),
  },
  {
    path: '**',
    redirectTo: PAGE_NOT_FOUND_PATH,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
