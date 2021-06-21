export interface answer {
  answer: string;
  correctAnswer: boolean;
  selected: boolean;
  isCorrect: boolean;
  isInCorrect: boolean;
}

export class Game {

  public get question(): string {
    return this._question;
  }

  public get answers(): answer[] {
    return this._answers;
  }

  public constructor(
    private _question: string,
    private _answers: answer[]
  ) { }



}



