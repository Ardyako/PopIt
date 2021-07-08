import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule, DASHBOARD_ROUTING_COMPONENTS } from './dashboard-routing.module';
import { SortRatingPipe } from './sort-rating-pipe/sort-rating.pipe';
import { SortCategoryPipe } from './sort-category-pipe/sort-category.pipe';
import { UniguePipe } from './unique-pipe/unique.pipe';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    DASHBOARD_ROUTING_COMPONENTS,
    SortRatingPipe,
    SortCategoryPipe,
    UniguePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class DashboardModule { }
