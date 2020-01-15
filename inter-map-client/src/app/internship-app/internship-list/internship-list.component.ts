import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Internship } from '../data/Internship';
import { StarRatingComponent } from 'ng-starrating';
import { InternshipService } from '../internship.service';
import { InternshipDTO } from '../data/InternshipDTO';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css']
})
export class InternshipListComponent implements OnInit {

  @Output() internshipWasSelected = new EventEmitter<Internship>();

  internships: InternshipDTO[] = [];

  filteredChildCompany = "";
  filteredMultipleCompany = "";
  filteredMultipleTechnology = "";
  ratingSelected = 0;
  sortSelected = "";
  statusSelected = "";

  pageOfInternships : Array<any>;
  p: number = 1;

  checked = false;
  indeterminate = false;
  statusString = [{ name: "Open" , selected: false } ,
                  { name: "Closed" , selected: false } ];

  ratingString =  [ { value : 1 , selected: false},
                    { value : 2 , selected: false},
                    { value : 3 , selected: false},
                    { value : 4 , selected: false},
                    { value : 5 , selected: false},  ];
  loading = true;

  constructor(private internshipService: InternshipService) { }

  ngOnInit() {
   this.internshipService.getInternships()
      .subscribe(data => {
        this.loading = false;
        this.internships = data;
      }, error => this.loading = true);
  }

  // onClickMe() {
  //   console.log('You are my hero!');
  //    this.getCompanyList();
  //    console.log(this.getNumberInternshipsOfCompany("Fortech"));
  //    console.log(this.getTechnologyList());
  // }


getCompanyList(){
  let companies = [];
  for( let i =0 ; i < this.internships.length ; i++){
    if(companies.indexOf(this.internships[i].company) === -1)
      companies.push(this.internships[i].company);
  }

  return companies
}


getTechnologyList(){
  console.log(this.internships);
  const technologies = [];
  for (let i = 0; i < this.internships.length; i++) {
    const technology = this.internships[i].areaOfInterest;
    let found = false;
    for (let j = 0; j < technologies.length; j++) {
      if (technologies[j] === technology) {
        found = true;
        break;
      }
    }
    if (!found) {
      technologies.push(technology);
    }
  }

  return technologies;
}


getNumberInternshipsOfCompany(companyName){
    let count = 0;
    for( let i = 0 ; i < this.internships.length ;i++)
      if(this.internships[i].company === companyName)
                count ++;
    return count;
}

getNumberInternshipsOfTechnology(technologyName){
  let count = 0;
  for( let i = 0 ; i < this.internships.length ;i++)
    if(this.internships[i].areaOfInterest === technologyName)
              count ++;
  return count;
}

getNumberInternshipsWithRating(rating){
  let count = 0;
  for( let i = 0 ; i < this.internships.length ; i++)
    if(this.internships[i].averageOfFeedbacks >= rating)
      count ++;
  return count;

}

onChange(companyName:string, isChecked: boolean) {
  if(isChecked) {
    this.filteredMultipleCompany += companyName + ",";
  } else {
    var const_str = companyName + ",";
    var str = this.filteredMultipleCompany.replace(const_str,"");
    this.filteredMultipleCompany = "";
    this.filteredMultipleCompany = str;
    console.log(this.filteredMultipleCompany);
  }
}

OnChangeTechnology(technologyName: string , isChecked: boolean){
  if(isChecked) {
    this.filteredMultipleTechnology += technologyName +",";
  }
  else{
    var const_str = technologyName + ",";
    var str = this.filteredMultipleTechnology.replace(const_str,"");
    this.filteredMultipleTechnology = "";
    this.filteredMultipleTechnology = str;
    console.log(this.filteredMultipleTechnology);
  }
}

OnChangeStatus(statusName: string , isChecked: boolean){
  if(isChecked){
    this.statusSelected = statusName;
    for (let i = 0; i < this.statusString.length; i++)
         if (this.statusString[i].name !== statusName)
            this.statusString[i].selected = false;
         else
            this.statusString[i].selected = true;
     }
  else
    this.statusSelected = "";
  }

onChangeRating(rating: number , isChecked: boolean){
  if(isChecked){
   this.ratingSelected = rating;
   for( let i=0; i < this.ratingString.length; i++)
    if(this.ratingString[i].value !== rating)
      this.ratingString[i].selected = false;
    else
      this.ratingString[i].selected = true;
  }
  else
    this.ratingSelected = -1;
}

onChangeRating2(rating:number , event){

}


}
