import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader-service/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from '../url-interceptor/url.interceptor';
import { LoaderInterceptor } from './loader-interceptor/loader.interceptor';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    LoaderService,
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
    LoaderComponent
  ]
})
export class LoaderModule { }
