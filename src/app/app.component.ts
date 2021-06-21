import { ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data-service/data.service';
import { GameComponent } from './game/game.component';
import { Game } from './models/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {

  private _questions!: Observable<Array<Game>>;
  public get questions(): Observable<Array<Game>> {
    return this._questions;
  }

  public constructor(private _dataService: DataService) {
  }

  public ngOnInit(): void {
    this._questions = of(this._dataService.getGameData());
  }

  public ngAfterViewInit() {
  }

}
