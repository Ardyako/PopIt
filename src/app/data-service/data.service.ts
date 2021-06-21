import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable()

export class DataService {

  constructor() { }

  public getGameData() {
    return [
      new Game('Question #1?',
        [{ answer: 'Q1Ansewer1!', correctAnswer: true, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q1Ansewer2!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q1Ansewer3!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q1Ansewer4!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false }]
      ),
      new Game('Question #2?',
        [{ answer: 'Q2Ansewer1!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q2Ansewer2!', correctAnswer: true, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q2Ansewer3!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q2Ansewer4!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false }]
      ),
      new Game('Question #3?',
        [{ answer: 'Q3Ansewer1!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q3Ansewer2!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q3Ansewer3!', correctAnswer: true, selected: false, isCorrect: false, isInCorrect: false },
        { answer: 'Q3Ansewer4!', correctAnswer: false, selected: false, isCorrect: false, isInCorrect: false }]
      )
    ]
  }
}
