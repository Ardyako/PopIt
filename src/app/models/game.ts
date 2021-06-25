export interface IAnswer {
  answer: string;
  correctAnswer: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  isInCorrect: boolean;
}

export class Game {

  public get question(): string {
    return this._question;
  }

  public get answers(): IAnswer[] {
    return this._answers;
  }

  public constructor(
    private _question: string,
    private _answers: IAnswer[]
  ) { }

}



