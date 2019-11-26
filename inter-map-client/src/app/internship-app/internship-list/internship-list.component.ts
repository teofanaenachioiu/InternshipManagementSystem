import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Internship } from '../data/Internship';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css']
})
export class InternshipListComponent implements OnInit {

  @Output() internshipWasSelected = new EventEmitter<Internship>();

  filteredChildCompany = "";

  
  filteredMultipleCompany = "";
  selected=0;

  internships : Internship[] = [
    new Internship('name1',true,3,'Cel mai tare intenrship jur','Manastur',
    'Ntt Data','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',2),
    new Internship('name2',false,1,'Cel mai tare intenrship jur 2 ','Zorilor',
    'Evozon','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',4),
    new Internship('name3',true,6,'Cel mai tare intenrship jur 3 ','Gheorgheni',
    'Stratec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',4),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Fortech','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',3),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Arobs','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',4),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Fortech','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',2),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Fortech','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',3),
    new Internship('name3',true,6,'Cel mai tare intenrship jur 3 ','Gheorgheni',
    'Stratec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',5)
  ]

  pageOfInternships : Array<any>;
  p: number = 1;

  checked = false;
  indeterminate = false;


  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    console.log('You are my hero!');
     this.getCompanyList();
     console.log(this.getNumberInternshipsOfCompany("Fortech"));
  }


getCompanyList(){
  let companies = [];
  for( let i =0 ; i < this.internships.length ;i++){
    if(companies.indexOf(this.internships[i].company) === -1)
      companies.push(this.internships[i].company);
  }

  return companies
}


getNumberInternshipsOfCompany(companyName){
    let count = 0;
    for( let i = 0 ; i < this.internships.length ;i++)
      if(this.internships[i].company === companyName)
                count ++;   
    return count;
}

onChange(companyName:string, isChecked: boolean) {
  if(isChecked) {
    this.filteredMultipleCompany += companyName + ",";
  } else {
    var const_str = companyName + ","
    var str = this.filteredMultipleCompany.replace(const_str,"");
    this.filteredMultipleCompany = "";
    this.filteredMultipleCompany = str;
    console.log(this.filteredMultipleCompany);
  }
}

// onChangeRating(rating: number , isChecked: boolean){
//   if(isChecked) {
//     this.selected = rating;
//   }
  

// }


onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  alert(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
}

}
