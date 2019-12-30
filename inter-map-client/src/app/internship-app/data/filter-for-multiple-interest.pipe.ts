import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterForMultipleInterest'
})
export class FilterForMultipleInterestPipe implements PipeTransform {

  transform(value: any, filterString : string , propName : string)  {
    
    if(value.length == 0 || filterString === ''){
      return value;
    }

   var filterStringSplitted = filterString.split(","); 

  const resultArray = [];
  for(const item of value ){
    var appeared = false;
    var technologiesSplitted = item[propName].split(",");
    for(const technology of technologiesSplitted){
      for(const string of filterStringSplitted ){
        if(technology.toUpperCase() === string.toUpperCase())
        appeared = true;
        }
    }
    if( appeared === true)
      resultArray.push(item);
  }

  return resultArray;
  }

}
