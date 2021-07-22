import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortRatingPipe } from './sort-rating-pipe/sort-rating.pipe';
import { SortCategoryPipe } from './sort-category-pipe/sort-category.pipe';
import { UniguePipe } from './unique-pipe/unique.pipe';

import { DashboardRoutingModule, DASHBOARD_ROUTING_COMPONENTS } from './dashboard-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';


@NgModule({
  declarations: [
    DASHBOARD_ROUTING_COMPONENTS,
    SortRatingPipe,
    SortCategoryPipe,
    UniguePipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
})
export class DashboardModule { }
