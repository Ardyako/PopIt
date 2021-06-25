import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data-service/data.service';
import { Game } from './models/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  private _questions$: Observable<Array<Game>>;
  public get questions$(): Observable<Array<Game>> {
    return this._questions$;
  }

  public constructor(dataService: DataService) {
    console.log('app constructor')
    this._questions$ = dataService.getGameData();
  }
}
