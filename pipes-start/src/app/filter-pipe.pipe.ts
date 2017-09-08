import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }

    const filterdArray = [];
    for(const item of value) {
      if(item[propName] == filterString ) {
        filterdArray.push(item);
      }
    }
    return filterdArray;

  }

}
