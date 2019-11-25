import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForMultipleCompany'
})
export class FilterForMultipleCompanyPipe implements PipeTransform {

  transform(value: any, filterString : string , propName : string)  {
    
    if(value.length == 0 || filterString === ''){
      return value;
    }

   var splitted = filterString.split(","); 

  const resultArray = [];
  for(const item of value ){
    var ok = 0;
    for(const string of splitted ){
      if(item[propName].toUpperCase() === string.toUpperCase())
        ok = 1;
    }
    if( ok === 1)
      resultArray.push(item);
  }

  return resultArray;
  }


  }

