import { ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GameComponent } from './game/game.component';
import { Game } from './models/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {

  private _questions: Array<Game>;
  public get questions(): Array<Game> {
    return this._questions;
  }

  public i: number = 0;

  public visible = true;
  public disabled = false;

  public constructor() {

    console.log('constructor app')

    this._questions = [
      new Game('Question #1?',
        [{ answer: 'Q1Ansewer1!', correctAnswer: true, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q1Ansewer2!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q1Ansewer3!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q1Ansewer4!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false }]
      ),
      new Game('Question #2?',
        [{ answer: 'Q2Ansewer1!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q2Ansewer2!', correctAnswer: true, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q2Ansewer3!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q2Ansewer4!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false }]
      ),
      new Game('Question #3?',
        [{ answer: 'Q3Ansewer1!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q3Ansewer2!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q3Ansewer3!', correctAnswer: true, state: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q3Ansewer4!', correctAnswer: false, state: false, isCorrect: false, isInCorrect: false }]
      )
    ]
  }

  public clickNextHandler() {
    this.i++;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges app')
  }

  public ngOnInit(): void {
    console.log('ngOnInit app')
  }

  //----------------------------------------------------------------------------

  @ViewChild(GameComponent)
  public gameСomponent!: GameComponent;

  public ngAfterViewInit() {
    //console.log(this.gameСomponent)
  }
  public destrHandler(): void {
    //this.visible = false;
  }

}
