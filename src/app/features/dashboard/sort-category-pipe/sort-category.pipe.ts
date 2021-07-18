import { Pipe, PipeTransform } from '@angular/core';

import { IFilm } from '../models/dashboard';

@Pipe({
  name: 'sortCategory',
})
export class SortCategoryPipe implements PipeTransform {

  transform(films: Array<IFilm> | null, category: string): Array<IFilm> {
    if (category == 'All') {
      return (films ?? []);
    }

    return (films ?? []).filter(film => film.category.includes(category));

  }

}
