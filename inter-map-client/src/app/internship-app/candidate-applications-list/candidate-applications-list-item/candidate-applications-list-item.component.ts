import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Internship} from '../../data/Internship';
import {StarRatingComponent} from 'ng-starrating';

@Component({
  selector: 'app-candidate-applications-list-item',
  templateUrl: './candidate-applications-list-item.component.html',
  styleUrls: ['./candidate-applications-list-item.component.css']
})
export class CandidateApplicationsListItemComponent implements OnInit {

  @Input() internship: Internship;
  @Output() internshipSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onInternshipSelected() {
    this.internshipSelected.emit();
  }

  onRate($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
    this.internship.rating = $event.newValue;
  }
}
