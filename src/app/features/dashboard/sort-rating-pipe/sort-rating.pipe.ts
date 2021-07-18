import { Pipe, PipeTransform } from '@angular/core';

import { IFilm } from '../models/dashboard';

@Pipe({
  name: 'sortRating',
})
export class SortRatingPipe implements PipeTransform {

  transform(films: Array<IFilm> | null, args: string): Array<IFilm> {
    return (films ?? []).sort((a, b) => {
      if (args == 'ascending') {
        return a.rating - b.rating;
      } else if (args == 'descending') {
        return b.rating - a.rating;
      }
      return 0;
    });
  }

}
