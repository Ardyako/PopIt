import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth-service/auth.service';
import { LOGIN_PATH } from 'src/app/core/login';
import { DataService } from 'src/app/shared/data-service/data.service';
import { IFilm } from './models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardComponent implements OnInit {

  private _films$!: Observable<Array<IFilm>>;
  public get films$(): Observable<Array<IFilm>> {
    return this._films$;
  }

  public sortRating: string = "ascending";
  public sortCategory: string = "All";
  public selected: string ="All";

  constructor(
    private _dataService: DataService,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._films$ = this._dataService.getMoviesData();
  }

  public sortRatingHandler(): void {
    this.sortRating == "ascending" ? this.sortRating = 'descending' : this.sortRating = 'ascending';
  }

  public selectCategoryHandler(value: any): void {
    debugger
    this.sortCategory = value.value;
    debugger
  }

  public logOffHandler(): void {
    this._authService.logged = false;
    this._router.navigate([LOGIN_PATH]);
  }

}
