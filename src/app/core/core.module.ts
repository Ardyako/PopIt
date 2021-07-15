import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderModule } from './loader/loader.module';
import { LoaderInterceptor } from './loader/loader-interceptor/loader.interceptor';
import { UrlInterceptor } from './url-interceptor/url.interceptor';
import { AuthModule } from './auth/auth.module';
import { UpdatePasswordRoutingModule } from './update-password/update-password-routing.module';


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
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  exports: [
    LoaderModule,
  ]
})
export class CoreModule { }
