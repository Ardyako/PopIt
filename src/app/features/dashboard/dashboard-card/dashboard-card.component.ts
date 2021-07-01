import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  public film!: IFilm | null;

  private _description!: Observable<string>;
  public get description(): Observable<string> {
    return this._description;
  }

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public detailHandler(id: number | null): void {
    this._router.navigate([CARD_PATH, this.film!.id]);
  }
}
