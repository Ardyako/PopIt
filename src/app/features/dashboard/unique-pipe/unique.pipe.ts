import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
})
export class UniguePipe implements PipeTransform {

  transform(value: Array<any> | null, arg: any): Array<any> {
    return value!
      .map(data => data[arg])
      .filter((v, i, a) => a.indexOf(v) === i);
  }

}
