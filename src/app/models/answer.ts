import { Game, IAnswer } from "./game";


export class AnswerModel {

  private _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled;
  }
  public set disabled(value: boolean) {
    this._disabled = value;
  }

  private _gameState!: number;
  public get gameState(): number {
    return this._gameState;
  }
  public set gameState(value: number) {
    this._gameState = value;
  }

  private _i: number;
  public get i(): number {
    return this._i;
  }
  public set i(value: number) {
    this._i = value;
  }

  public questionsNumber!: number;
  public answer!: IAnswer;

  public constructor() {
    this._i = 0;
    this._disabled = true;
  }

  public checkAnswer(gameData: Array<Game>, answer: string): void {
    this.questionsNumber = gameData.length;
    for (this.answer of gameData[this.i].answers) {
      this.answer.answer == answer ? this.checkCorrectAnswer() : this.answer.isSelected = false;
    }
  }

  public checkCorrectAnswer(): void {
    this.answer.isSelected ? this.validatekAnswer() : this.answer.isSelected = true;
  }

  public validatekAnswer(): void {
    if (this.answer.correctAnswer) {
      this.validateButton();
      this.checkLastQuestion();
    }
    else {
      this.validateButton();
      this.gameState = 0;
    }
  }

  public validateButton(): void {
    this.answer.isSelected = false;
    this.answer.correctAnswer ? this.answer.isCorrect = true : this.answer.isInCorrect = true;;
    this.disabled = false;
  }

  public checkLastQuestion() {
    if (this.i == this.questionsNumber - 1) {
      this.gameState = 1;
      this.disabled = false;
    }
  }

  public nextToggle() {
    this.i++;
    this.disabled = true;
  }
}
