import { Pipe, PipeTransform } from '@angular/core';

import { IFilm } from '@mf-app/features/dashboard/models/dashboard';

@Pipe({
  name: 'unique',
})
export class UniguePipe implements PipeTransform {

  public transform(value: Array<IFilm>): Array<string> {
    return value
      .map((data: IFilm) => data.category)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

}
