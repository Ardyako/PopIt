import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DataService } from '@mf-app/shared/data-service/data.service';


import { ONE } from '@mf-app/shared/constants';

import { CARD_PATH } from '../../card';
import { CARD_EDITOR_PATH } from '../../card-editor';
import { IFilm } from '../models/dashboard';

@Component({
  selector: 'mf-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCardComponent implements OnInit {

  @Input()
  public film!: IFilm;

  @Input()
  public watch$!: Observable<boolean>;

  public constructor(
    private _dataService: DataService,
    private _router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.watch$ = this._dataService.getWatchList(this.film.id);
  }

  public detailHandler(): void {
    this._router.navigate([CARD_PATH, this.film.id]);
  }

  public editHandler(): void {
    this._router.navigate([CARD_EDITOR_PATH, this.film.id]);
  }

  public addWatchHandler(): void {
    this._dataService.addFilmToWatchList(this.film).pipe(take(ONE))
      .subscribe();
    this.watch$ = this._dataService.getWatchList(this.film.id);
  }

  public deleteWatchHandler(): void {
    this._dataService.deleteFilmFromWatchList(this.film.id).pipe(take(ONE))
      .subscribe();
    this.watch$ = this._dataService.getWatchList(this.film.id);
  }
}
