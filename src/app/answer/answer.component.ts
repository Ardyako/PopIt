import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { answer } from '../models/game';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerComponent implements OnInit {

  @Input()
  public answerText!: string;

  @Input()
  public state!: boolean;

  @Input()
  public isCorrect!: boolean;

  @Input()
  public isInCorrect!: boolean;

  @Output()
  public clickEmitter: EventEmitter<string>;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.clickEmitter = new EventEmitter();

    console.log('constructor answer')
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges answer')
  }

  public ngOnInit(): void {
    console.log('ngOnInit answer')
  }

  clickHandler() {
    console.log('clickHandler answer')
    this.clickEmitter.emit(this.answerText);
  }

}
