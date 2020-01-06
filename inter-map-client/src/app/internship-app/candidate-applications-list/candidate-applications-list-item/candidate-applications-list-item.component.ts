import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Internship} from '../../data/Internship';
import {StarRatingComponent} from 'ng-starrating';
import {ApplicationDTO, ApplicationStatus} from '../../data/ApplicationDTO';
import {MatDialog} from '@angular/material';
import {ExtraMessageDialogComponent} from './extra-message-dialog/extra-message-dialog.component';

@Component({
  selector: 'app-candidate-applications-list-item',
  templateUrl: './candidate-applications-list-item.component.html',
  styleUrls: ['./candidate-applications-list-item.component.css']
})
export class CandidateApplicationsListItemComponent implements OnInit {

  @Input() application: ApplicationDTO;
  @Output() applicationSelected = new EventEmitter<void>();
  show = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  public get ApplicationStatus() {
    return ApplicationStatus;
  }

  onInternshipSelected() {
    this.applicationSelected.emit();
  }

  onRate($event: { oldValue: number; newValue: number; starRating: StarRatingComponent }) {
    // this.application.feedbacks.add() = $event.newValue;
  }

  onShowExtraMessage() {
    this.dialog.open(ExtraMessageDialogComponent, {
      data: this.application.extraMessage
    });
  }
}
