import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Internship } from '../../data/Internship';



@Component({
  selector: 'app-internship-item',
  templateUrl: './internship-item.component.html',
  styleUrls: ['./internship-item.component.css']
})
export class InternshipItemComponent implements OnInit {

  @Input() internship : Internship;
  @Output() internshipSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onInternshipSelected(){
    this.internshipSelected.emit();
  }

}
