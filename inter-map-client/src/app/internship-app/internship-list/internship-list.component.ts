import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Internship } from '../data/Internship';
import { StarRatingComponent } from 'ng-starrating';
import { InternshipService } from '../internship.service';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css']
})
export class InternshipListComponent implements OnInit {

  @Output() internshipWasSelected = new EventEmitter<Internship>();

  // internships : Internship[] = [
  //   new Internship('name1',true,3,'Cel mai tare intenrship jursssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss','Manastur',
  //   'Ntt Data','http://www.youngoos.com/cdn/site/images/jobs/crop_jobs/thumb-NTT-Data_logo.png',2,".net,c/c++","apply"),
  //   new Internship('name2',false,1,'Cel mai tare intenrship jur 2 ','Zorilor',
  //   'Evozon','https://network.sensiolabs.com/assets/cache/partner_thumbnail/uploads/270-Logo-Evozon-(200x90)[4784].png',4,"java,.net","pending"),
  //   new Internship('name3',true,6,'Cel mai tare intenrship jur 3 ','Gheorgheni',
  //   'Stratec','https://i0.wp.com/www.bluespoint.net/wp-content/uploads/2017/03/stratec_logo_4c-border.jpg?fit=480%2C260&ssl=1',4,".net,web","apply"),
  //   new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
  //   'Fortech','https://www.fortech.ro/wp-content/uploads/2017/11/FortechSoftwareOutsourcingCompany.jpg',3,"java,web","apply"),
  //   new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
  //   'Arobs','https://runinclujorg.files.wordpress.com/2018/08/logo-arobs-transilvania-software.png',4,"c/c++,java","endeed"),
  //   new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
  //   'Fortech','https://www.fortech.ro/wp-content/uploads/2017/11/FortechSoftwareOutsourcingCompany.jpg',2,"java,c/c++","endeed"),
  //   new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
  //   'Fortech','https://www.fortech.ro/wp-content/uploads/2017/11/FortechSoftwareOutsourcingCompany.jpg',3,"c/c++,colob","endeed"),
  //   new Internship('name3',true,6,'Cel mai tare intenrship jur 3 ','Gheorgheni',
  //   'Stratec','https://i0.wp.com/www.bluespoint.net/wp-content/uploads/2017/03/stratec_logo_4c-border.jpg?fit=480%2C260&ssl=1',5,".net,java","pending")
  // ]

  internships: Internship[];

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
  statusString = [{ name: "apply" , selected: false } ,
                  { name: "pending" , selected: false } ,
                  { name: "endeed" , selected: false } ];

  ratingString =  [ { value : 1 , selected: false},
                    { value : 2 , selected: false},
                    { value : 3 , selected: false},
                    { value : 4 , selected: false},
                    { value : 5 , selected: false},  ];

  constructor(private internshipService: InternshipService) { }

  ngOnInit() {
    return this.internshipService.getInternships()
      .subscribe(data => this.internships = data);
  }

  onClickMe() {
    console.log('You are my hero!');
     this.getCompanyList();
     console.log(this.getNumberInternshipsOfCompany("Fortech"));
     console.log(this.getTechnologyList());
  }


getCompanyList(){
  let companies = [];
  for( let i =0 ; i < this.internships.length ; i++){
    if(companies.indexOf(this.internships[i].company) === -1)
      companies.push(this.internships[i].company);
  }

  return companies
}

getTechnologyList(){

  let technologies = [];
  for(let i=0 ; i<this.internships.length ; i++){
    let stringOfTechnologies = this.internships[i].interests.split(",");
    for(let j = 0 ; j < stringOfTechnologies.length ; j++)
      if(technologies.indexOf(stringOfTechnologies[j]) === -1 )
        technologies.push(stringOfTechnologies[j]);

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
    if(this.internships[i].interests.indexOf(technologyName) !== -1)
              count ++;   
  return count;
}

getNumberInternshipsWithRating(rating){
  let count = 0;
  for( let i = 0 ; i < this.internships.length ; i++)
    if(this.internships[i].rating >= rating)
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
