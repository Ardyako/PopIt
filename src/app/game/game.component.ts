import { ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data-service/data.service';
import { AnswerModel } from '../models/answer';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public gameData!: Array<Game>;

  private _answermodel!: AnswerModel;
  public get answermodel(): AnswerModel {
    return this._answermodel;
  }

  public i: number = 0;
  public gameState!: number;
  public disabled: boolean = true;


  public constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  public clickNextHandler() {
    this.i++;
    this.disabled = true;
  }

  public clickHandler(answer: string): void {

    //this.answermodel.checkAnswer(this.gameData, answer, this.i);

    for (let item of this.gameData[this.i].answers) {
      if (item.answer == answer) {
        if (item.selected) {
          if (item.correctAnswer) {
            item.selected = false;
            item.isCorrect = true;
            this.disabled = false
            if (this.i == this.gameData.length - 1) {
              this.gameState = 1;
              this.disabled = false;
            }
          }
          else {
            item.selected = false;
            item.isInCorrect = true;
            this.gameState = 0;
            this.disabled = false;
          }
        }
        else {
          item.selected = true;
        }
      }
      else {
        item.selected = false;
      }
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public ngOnInit(): void {
    this._answermodel = new AnswerModel(this.disabled);
  }

  public ngOnDestroy(): void {
  }

}
