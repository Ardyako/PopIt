import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/shared/data-service/data.service';
import { DASHBOARD_PATH } from '../dashboard';
import { IFilm } from '../dashboard/models/dashboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardComponent implements OnInit {

  private _film$!: Observable<IFilm>;
  public get film$(): Observable<IFilm> {
    return this._film$;
  }

  private _watchStatus$!: Observable<boolean>;
  public get watchStatus$(): Observable<boolean> {
    return this._watchStatus$;
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id')!);
    this._film$ = this._dataService.getDescription(id);
    this._watchStatus$ = this._route.snapshot.data.cardDetails;
  }

  public watchHandler(film: IFilm): void {
    this._dataService.addFilmToWatchList(film).pipe(take(1)).subscribe();
    this._watchStatus$ = of(true);
  }

  public deletewatchHandler(id: number): void {
    this._dataService.deleteFilmFromWatchList(id).pipe(take(1)).subscribe();
    this._watchStatus$ = of(false);
  }

  public backHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

}
