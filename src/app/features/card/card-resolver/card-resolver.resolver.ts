import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, share, take } from 'rxjs/operators';
import { DataService } from 'src/app/shared/data-service/data.service';

@Injectable()
export class CardResolverResolver implements Resolve<boolean> {

  public constructor(private _dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._dataService.getWatchList(route.params.id).pipe(map(data => data)).pipe(take(1));
  }

}
