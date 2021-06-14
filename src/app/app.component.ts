import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PopIt';

  //row1
  public pushedRed1 = false;
  public pushedRed2 = false;
  public pushedRed3 = false;
  public pushedRed4 = false;
  public pushedRed5 = false;
  public pushedRed6 = false;

  public clickRed1Handler(): void {
    this.pushedRed1 = true;
  }

  public clickRed2Handler(): void {
    this.pushedRed2 = true;
  }

  public clickRed3Handler(): void {
    this.pushedRed3 = true;
  }

  public clickRed4Handler(): void {
    this.pushedRed4 = true;
  }

  public clickRed5Handler(): void {
    this.pushedRed5 = true;
  }

  public clickRed6Handler(): void {
    this.pushedRed6 = true;
  }

  public clickRefreshHandler(): void {
    this.pushedRed1 = false;
    this.pushedRed2 = false;
    this.pushedRed3 = false;
    this.pushedRed4 = false;
    this.pushedRed5 = false;
    this.pushedRed6 = false;
  }

  //row2
  public pushedBlue1 = true;
  public pushedBlue2 = true;
  public pushedBlue3 = true;
  public pushedBlue4 = true;
  public pushedBlue5 = true;
  public pushedBlue6 = true;

  public clickBlue1Handler(): void {
    this.pushedBlue1 = !this.pushedBlue1;
  }

  public clickBlue2Handler(): void {
    this.pushedBlue2 = !this.pushedBlue2;
  }

  public clickBlue3Handler(): void {
    this.pushedBlue3 = !this.pushedBlue3;
  }

  public clickBlue4Handler(): void {
    this.pushedBlue4 = !this.pushedBlue4;
  }

  public clickBlue5Handler(): void {
    this.pushedBlue5 = !this.pushedBlue5;
  }

  public clickBlue6Handler(): void {
    this.pushedBlue6 = !this.pushedBlue6;
  }

  //row3
  public row_yellow: string = "row_yellow";

  public currentBtn!: string;

  public arr = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6"]

  public btnHandler(btn: string): void {
    this.currentBtn = btn;
  }

  //row3
  public arrN = [0, 1, 2, 3, 4, 5]

  public status!: number;

  public toggleHandler(btnN: number): void {
    this.status = btnN;
  }

  //row4
  public value = false;

  public toggleRow4Handler(): void {
    this.value = !this.value;
  }








}
