import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {

  transform(value: any, filterString : string , propName : string)  {
    
    if(value.length == 0 || filterString === ''){
      return value;
    }

    const resultArray = [];
    for(const item of value ){
      if(item[propName].toUpperCase().includes(filterString.toUpperCase())){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
