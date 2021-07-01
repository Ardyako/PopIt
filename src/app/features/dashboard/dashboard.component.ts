import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._films$ = this._dataService.getMoviesData();
  }

}
