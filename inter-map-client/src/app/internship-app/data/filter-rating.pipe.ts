import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRating'
})
export class FilterRatingPipe implements PipeTransform {

  transform(value: any, rating : number , propName : string)  {
    
    if(value.length == 0 || rating === 0){
      return value;
    }

    const resultArray = [];
    for(const item of value ){
      if(item[propName] >= rating ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
