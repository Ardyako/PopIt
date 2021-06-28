import { DataService } from "../data-service/data.service";
import { Game, IAnswer } from "./game";

export interface IAnswersCheck {
  [correct: number]: boolean;
}


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
  public status!: boolean;
  public currentId!: number
  public answers!: IAnswer[];

  public constructor(private _dataService: DataService) {
    this._i = 0;
    this._disabled = true;
  }

  public checkAnswer(gameData: Array<Game>, answer: string): void {
    this.questionsNumber = gameData.length;
    this.answers = gameData[this.i].answers;
    for (this.answer of this.answers) {
      this.answer.answer == answer ? this.checkCorrectAnswer() : this.answer.isSelected = false;
    }
  }

  public checkCorrectAnswer(): void {
    this.answer.isSelected ? this.validatekAnswer() : this.answer.isSelected = true;
  }

  public validatekAnswer(): void {
    this.currentId = this.answer.answerId;
    this._dataService.getCorrectAnwer().subscribe(correct => {
      this.status = correct[this.currentId];
      if (this.status) {
        this.validateButton();
        this.checkLastQuestion();
      }
      else {
        this.validateButton();
        this.gameState = 0;
      }
    })
  }

  public validateButton(): void {
    this.answers.map(answr => {
      if (answr.answerId == this.currentId) {
        answr.isSelected = false;
        this.status ? answr.isCorrect = true : answr.isInCorrect = true;
        this.disabled = false;
      }
    })
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
