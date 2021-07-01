import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule, DASHBOARD_ROUTING_COMPONENTS } from './dashboard-routing.module';
import { SortRatingPipe } from './sort-rating-pipe/sort-rating.pipe';
import { SortCategoryPipe } from './sort-category-pipe/sort-category.pipe';


@NgModule({
  declarations: [
    DASHBOARD_ROUTING_COMPONENTS,
    SortRatingPipe,
    SortCategoryPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
