import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCategory'
})
export class SortCategoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
