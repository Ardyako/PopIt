import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { IFilm } from 'src/app/features/dashboard/models/dashboard';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  public getMoviesData(): Observable<Array<IFilm>> {
    return this._http.get<Array<IFilm>>("moviesDescriptions")
      .pipe(catchError(this.errorHandler)) ?? null;
  }

  public getDescription(id: number): Observable<IFilm> {
    return this._http.get<IFilm>(`moviesDescriptions/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  public addFilmToWatchList(film: IFilm) {
    return this._http.post('moviesWatchList', film)
      .pipe(catchError(this.errorHandler));
  }

  public updateFilmData(film: IFilm, id: number) {
    return this._http.put(`moviesDescriptions/${id}`, film)
      .pipe(catchError(this.errorHandler));
  }

  public deleteFilmFromWatchList(id: number): Observable<void> {
    return this._http.delete<void>(`moviesWatchList/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  public getWatchList(id: number): Observable<boolean> {
    return this._http.get<Array<IFilm>>(`moviesWatchList?id=${id}`).pipe(map(data => data.length == 0 ? false : true));
  }

  public errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message || "Server Error")
  }
}
