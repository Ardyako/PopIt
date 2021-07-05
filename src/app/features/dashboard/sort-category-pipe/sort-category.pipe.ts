import { Pipe, PipeTransform } from '@angular/core';
import { IFilm } from '../models/dashboard';

@Pipe({
  name: 'sortCategory'
})
export class SortCategoryPipe implements PipeTransform {

  transform(films: IFilm[] | null, category: string): IFilm[] {
    if (category == "All")
      return (films ?? []);
    else {
      return (films ?? []).filter(film => film.category.includes(category))
    }
  }

}
