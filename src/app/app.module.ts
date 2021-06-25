import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameComponent } from './game/game.component';
import { AnswerComponent } from './answer/answer.component';

import { DataService } from './data-service/data.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';


import { UrlInterceptor } from './url-interceptor/url.interceptor';
import { AuthService } from './auth-service/auth.service';
import { TokenInterceptor } from './token-interceptor/token.interceptor';
import { LoaderService } from './loader-service/loader.service';
import { LoaderInterceptor } from './loader-interceptor/loader.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [
    DataService,
    AuthService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
