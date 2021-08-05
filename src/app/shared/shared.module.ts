import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DataService } from './data-service/data.service';
import { WindowService } from '@mf-app/shared/window-service/window.service';

import { PopUpModule } from '@mf-app/shared/pop-up/pop-up.module';


@NgModule({
  declarations: [
  ],
  providers: [
    DataService,
    WindowService,
  ],
  imports: [
    CommonModule,
    PopUpModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SharedModule { }
