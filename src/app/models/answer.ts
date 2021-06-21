import { Game } from "./game";



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

  public constructor(disabled: boolean) {
    this._disabled = disabled;
  }

  public checkAnswer(gameData: Array<Game>, answer: string, i: number): void {
    for (let item of gameData[i].answers) {
      if (item.answer == answer) {
        if (item.selected) {
          if (item.correctAnswer) {
            item.selected = false;
            item.isCorrect = true;
            this.disabled = false
            if (i == gameData.length - 1) {
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
}
