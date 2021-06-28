import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, Input } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { LoaderService } from '../loader-service/loader.service';
import { AnswerModel } from '../models/answer';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {

  @Input()
  public gameData!: Array<Game> | null;

  private _answermodel!: AnswerModel;
  public get answermodel(): AnswerModel {
    return this._answermodel;
  }

  public constructor(private _changeDetectorRef: ChangeDetectorRef, public loaderService: LoaderService, private _dataService: DataService) {
    this._answermodel = new AnswerModel(_dataService);
  }

  public clickNextHandler() {
    this.answermodel.nextToggle()
  }

  public clickHandler(answer: string): void {
    this.answermodel.checkAnswer(this.gameData!, answer);
  }
}
