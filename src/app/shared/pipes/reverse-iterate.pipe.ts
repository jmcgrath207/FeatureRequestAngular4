import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseIterate'
})
export class ReverseIteratePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.indexOf(args);
  }

}
