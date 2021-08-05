import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorPageComponent } from './error-page/error-page/error-page.component';

import { CoreRoutingModule } from './core-routing.module';
import { LoaderModule } from './loader/loader.module';
import { AuthModule } from './auth/auth.module';
import { UpdatePasswordRoutingModule } from './update-password/update-password-routing.module';
import { ErrorPageModule } from '@mf-app/core/error-page/error-page/error-page.module';

import { ExceptionHandler } from '@mf-app/core/exception-handler/exception.handler';

import { UrlInterceptor } from './url-interceptor/url.interceptor';
import { LoaderInterceptor } from './loader/loader-interceptor/loader.interceptor';


@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    HttpClientModule,
    LoaderModule,
    AuthModule,
    UpdatePasswordRoutingModule,
    ErrorPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ExceptionHandler,
    },

  ],
  exports: [
    LoaderModule,
  ],
})
export class CoreModule { }
