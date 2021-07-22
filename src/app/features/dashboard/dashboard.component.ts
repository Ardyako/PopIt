import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

//import { DataService } from 'src/app/shared/data-service/data.service';

import { DataService } from '@mf-app/shared/data-service/data.service';
import { AuthService } from '@mf-app/core/auth/auth-service/auth.service';


import { LOGIN_PATH } from '@mf-app/core/login';

import { SortCategoryType, SortRatingType } from './dashboard.model';
import { IFilm } from './models/dashboard';

@Component({
  selector: 'mf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardComponent implements OnInit {

  public sortRating: SortRatingType;
  public sortCategory: SortCategoryType;
  public selected = 'All';

  private _films$!: Observable<Array<IFilm>>;
  public get films$(): Observable<Array<IFilm>> {
    return this._films$;
  }


  public constructor(
    private _router: Router,
    private _dataService: DataService,
    private _authService: AuthService,
  ) {
    this.sortRating = 'ascending';
    this.sortCategory = 'All';
  }


  public ngOnInit(): void {
    this._films$ = this._dataService.getMoviesData();
  }


  public sortRatingHandler(): void {
    if (this.sortRating === 'ascending') {
      this.sortRating = 'descending' ;
    } else {
      this.sortRating = 'ascending';
    }
  }

  public selectCategoryHandler(value: SortCategoryType): void {
    this.sortCategory = value;
  }

  public logOffHandler(): void {
    this._authService.logged = false;
    this._router.navigate([LOGIN_PATH]);
  }

}
