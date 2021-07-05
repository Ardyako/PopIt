import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/shared/data-service/data.service';
import { CARD_PATH } from '../../card';
import { IFilm } from '../models/dashboard';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCardComponent implements OnInit {

  @Input()
  public film!: IFilm;

  @Input()
  public watch$!: Observable<boolean>;

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.watch$ = this._dataService.getWatchList(this.film.id);
  }

  public detailHandler(id: number | null): void {
    this._router.navigate([CARD_PATH, this.film!.id]);
  }

  public addWatchHandler(): void {
    this._dataService.addFilmToWatchList(this.film).pipe(take(1)).subscribe();
    //this.watch$ = of(true);
    this.watch$ = this._dataService.getWatchList(this.film.id);
  }

  public deleteWatchHandler(): void {
    this._dataService.deleteFilmFromWatchList(this.film.id).pipe(take(1)).subscribe();
    //this.watch$ = of(false);
    this.watch$ = this._dataService.getWatchList(this.film.id);
  }
}
