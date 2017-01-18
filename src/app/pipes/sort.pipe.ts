import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(array: any[], args) {
    let sorted = array.sort();
    if (args.length > 0 && args === 'DESC') {
      sorted = sorted.reverse();
    }
    return sorted;
  }
}
