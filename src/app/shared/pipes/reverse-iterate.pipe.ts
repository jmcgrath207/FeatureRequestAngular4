import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseiterate'
})
export class ReverseIteratePipe implements PipeTransform {

  transform(value: any, args?: any): any {


    for(let i = value.length; i-- > 0;) {
      value[i]["commentNumber"] = i + 1;

    }

    return value
  }

}
