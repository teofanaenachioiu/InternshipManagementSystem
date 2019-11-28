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
    var appeared = false;
    for(const string of splitted ){
      if(item[propName].toUpperCase() === string.toUpperCase())
      appeared = true;
    }
    if( appeared === true)
      resultArray.push(item);
  }

  return resultArray;
  }


  }

