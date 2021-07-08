import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniguePipe implements PipeTransform {

  transform(value: any[] | null, arg: any): any[] {
    return value!
      .map(data => data[arg])
      .filter((v, i, a) => a.indexOf(v) === i);
  }

}
