import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { IFilm } from 'src/app/features/dashboard/models/dashboard';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  public getMoviesData(): Observable<Array<IFilm>> {
    return this._http.get<Array<IFilm>>("moviesDB")
      .pipe(catchError(this.errorHandler));
  }

  public getDescription(id: number): Observable<IFilm> {
    return this._http.get<IFilm>(`moviesDescriptions/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  public addFilmToWatchList(film: IFilm) {
    return this._http.post('moviesWatchList', film)
      .pipe(catchError(this.errorHandler));
  }

  public deleteFilmFromWatchList(id: number): Observable<void> {
    return this._http.delete<void>(`moviesWatchList/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  public getWatchList(id: number): Observable<IFilm> {
    return this._http.get<IFilm>(`moviesWatchList/${id}`);
  }

  public errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message || "Server Error")
  }
}
