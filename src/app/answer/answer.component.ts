import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerComponent {

  @Input()
  public answerText!: string;

  @Input()
  public isSelected!: boolean;

  @Input()
  public isCorrect!: boolean;

  @Input()
  public isInCorrect!: boolean;

  @Output()
  public clickEmitter: EventEmitter<string>;

  constructor() {
    this.clickEmitter = new EventEmitter();
  }

  clickHandler() {
    this.clickEmitter.emit(this.answerText);
  }

}
