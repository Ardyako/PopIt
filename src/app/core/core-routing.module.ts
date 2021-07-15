import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard/auth.guard';
import { LOGIN_PATH } from './login';
import { PAGE_NOT_FOUND_PATH } from './page-not-found';
import { UPDATE_PASSWORD_PATH } from './update-password';

const routes: Routes = [
  {
    path: '',
    redirectTo: LOGIN_PATH,
    pathMatch: 'full',
  },
  {
    path: LOGIN_PATH,
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: UPDATE_PASSWORD_PATH,
    canActivate: [AuthGuard],
    loadChildren: () => import('./update-password/update-password.module')
      .then(m => m.UpdatePasswordModule),
  },
  {
    path: PAGE_NOT_FOUND_PATH,
    loadChildren: () => import('./page-not-found/page-not-found.module')
      .then(m => m.PageNotFoundModule),
  },
  {
    path: '**',
    redirectTo: PAGE_NOT_FOUND_PATH,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
