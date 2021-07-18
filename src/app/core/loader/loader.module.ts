import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from './loader.component';

import { LoaderService } from './loader-service/loader.service';


@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    LoaderService,
  ],
  exports: [
    LoaderComponent,
  ],
})
export class LoaderModule { }
