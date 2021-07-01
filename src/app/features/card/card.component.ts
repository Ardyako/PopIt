import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  private _film!: IFilm;
  public get film(): IFilm {
    return this._film;
  }

  public watched: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id')!);

    this._dataService.getDescription(id!).pipe(take(1)).subscribe(
      data => this._film = data
    );

    this._dataService.getWatchList(id).pipe(take(1)).subscribe(
      data => {
        this.watched = true;
        this._changeDetectorRef.markForCheck();
      },
      error => {
        this.watched = false;
        this._changeDetectorRef.markForCheck();
      }
    );
  }

  public watchHandler(film: IFilm): void {
    this._dataService.addFilmToWatchList(film).pipe(take(1)).subscribe();
    this.watched = true;
  }

  public deletewatchHandler(id: number): void {
    this._dataService.deleteFilmFromWatchList(id).pipe(take(1)).subscribe();
    this.watched = false;
  }

  public backHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

}
