import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Internship } from '../data/Internship';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css']
})
export class InternshipListComponent implements OnInit {

  @Output() internshipWasSelected = new EventEmitter<Internship>();

  @Input()
  filteredChildCompany : string;


  internships : Internship[] = [
    new Internship('name1',true,3,'Cel mai tare intenrship jur','Manastur',
    'Ntt Data','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name2',false,1,'Cel mai tare intenrship jur 2 ','Zorilor',
    'Evozon','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name3',true,6,'Cel mai tare intenrship jur 3 ','Gheorgheni',
    'Stratec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Fortech','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Arobs','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Fortech','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name4',false,2,'Cel mai tare intenrship jur 4','Grigorescu',
    'Fortech','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Internship('name3',true,6,'Cel mai tare intenrship jur 3 ','Gheorgheni',
    'Stratec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]


  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    console.log('You are my hero!');
  }

}
