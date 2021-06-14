import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PopIt';

  private _status: boolean[];

  public get status() {
    return this._status;
  }

  constructor() {
    this._status = Array(36).fill(false);
  }

  public toggleHandler(btnN: number): void {
    this.status[btnN] = !this.status[btnN];
  }

}
