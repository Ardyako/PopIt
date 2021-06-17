import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  @Input()
  public questionText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
