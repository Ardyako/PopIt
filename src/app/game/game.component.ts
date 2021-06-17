import { ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public gameData!: Game;

  // @Output()
  // public endEmitter: EventEmitter<boolean>;

  public constructor(private _changeDetectorRef: ChangeDetectorRef) {
    console.log('constructor game')
  }

  public clickHandler(answer: string): void {
    console.log('clickHandler game')

    for (let { index, item } of this.gameData.answers.map((item, index) => ({ index, item }))) {
      if (item.answer == answer) {
        if (item.state) {
          if (item.correctAnswer) {
            item.state = false;
            item.isCorrect = true;
          }
          else {
            item.state = false;
            item.isInCorrect = true;
          }
        }
        else {
          item.state = true;
        }
      }
      else {
        item.state = false;
      }
    }



    // //this.clickEmitter.emit(this.data.lastName);
    // this.gameData.answers[0].state = false;

  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges game', changes)
  }


  public ngOnInit(): void {
    console.log('ngOnInit game')
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy ')
  }

}
