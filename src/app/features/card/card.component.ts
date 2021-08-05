import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { PopUpComponent } from '@mf-app/shared/pop-up/pop-up.component';

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

  private _id: number;
  public get id(): number {
    return this._id;
  }

  public constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private _dialog: MatDialog,
  ) {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._isWatchStatus = this._route.snapshot.data.cardDetails;
  }

  public ngOnInit(): void {
    this._film$ = this._dataService.getDescription(this._id);
  }

  public watchHandler(film: IFilm): void {
    this._dataService.addFilmToWatchList(film).pipe(take(ONE))
      .subscribe();
    this._isWatchStatus = true;
  }

  public deletewatchHandler(): void {
    this._dataService.deleteFilmFromWatchList(this._id).pipe(take(ONE))
      .subscribe();
    this._isWatchStatus = false;
  }

  public backHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

  public feedbackOpen(): void {
    this._dialog.open(PopUpComponent);
  }

}
