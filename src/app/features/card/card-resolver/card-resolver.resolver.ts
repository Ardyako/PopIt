import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';


import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


import { DataService } from '@mf-app/shared/data-service/data.service';

import { ONE } from '@mf-app/shared/constants';

@Injectable()
export class CardResolverResolver implements Resolve<boolean> {

  public constructor(private _dataService: DataService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this._dataService.getWatchList(route.params.id).pipe(map(data => data))
      .pipe(take(ONE));
  }

}
