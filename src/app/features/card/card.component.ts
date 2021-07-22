import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DataService } from '@mf-app/shared/data-service/data.service';


import { ONE } from '@mf-app/shared/constants';

import { DASHBOARD_PATH } from '../dashboard';
import { IFilm } from '../dashboard/models/dashboard';

@Component({
  selector: 'mf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardComponent implements OnInit {

  private _film$!: Observable<IFilm> | null;
  public get film$(): Observable<IFilm> | null {
    return this._film$;
  }

  private _isWatchStatus: boolean;
  public get watchStatus(): boolean {
    return this._isWatchStatus;
  }

  public constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
  ) {
    this._isWatchStatus = this._route.snapshot.data.cardDetails;
  }

  public ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._film$ = this._dataService.getDescription(id);
  }

  public watchHandler(film: IFilm): void {
    this._dataService.addFilmToWatchList(film).pipe(take(ONE))
      .subscribe();
    this._isWatchStatus = true;
  }

  public deletewatchHandler(id: number): void {
    this._dataService.deleteFilmFromWatchList(id).pipe(take(ONE))
      .subscribe();
    this._isWatchStatus = false;
  }

  public backHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

}
