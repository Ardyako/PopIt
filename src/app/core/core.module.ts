import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { LoaderModule } from './loader/loader.module';
import { AuthModule } from './auth/auth.module';
import { UpdatePasswordRoutingModule } from './update-password/update-password-routing.module';

import { UrlInterceptor } from './url-interceptor/url.interceptor';
import { LoaderInterceptor } from './loader/loader-interceptor/loader.interceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    HttpClientModule,
    LoaderModule,
    AuthModule,
    UpdatePasswordRoutingModule,
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
  ],
  exports: [
    LoaderModule,
  ],
})
export class CoreModule { }
