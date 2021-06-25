import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Game } from '../models/game';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getGameData(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(`data`)
      .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
}
