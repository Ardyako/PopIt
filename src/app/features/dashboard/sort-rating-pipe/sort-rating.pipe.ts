import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortRating'
})
export class SortRatingPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return null;
  }

}
