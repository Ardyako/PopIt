import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Game, IAnswer } from '../models/game';
import { catchError, map, take } from 'rxjs/operators';
import { IAnswersCheck } from '../models/answer';

@Injectable()
export class DataService {

  private readonly URL = 'http://localhost:3000/answers';

  constructor(private _http: HttpClient) { }

  public getGameData(): Observable<Array<Game>> {
    return this._http.get<Array<Game>>("gameData")
      .pipe(catchError(this.errorHandler));
  }


  public asd!: Observable<boolean>;

  public getCorrectAnwer(): Observable<IAnswersCheck> {
    return this._http.get<IAnswersCheck>("answers");
  }

  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
}
