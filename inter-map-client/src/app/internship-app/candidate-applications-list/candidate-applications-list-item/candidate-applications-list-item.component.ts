import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Internship} from '../../data/Internship';
import {StarRatingComponent} from 'ng-starrating';
import {ApplicationDTO, ApplicationStatus, InternshipStatus} from '../../data/ApplicationDTO';
import {MatDialog} from '@angular/material';
import {ExtraMessageDialogComponent} from './extra-message-dialog/extra-message-dialog.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FeedbackDTO} from '../../data/FeedbackDTO';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-candidate-applications-list-item',
  templateUrl: './candidate-applications-list-item.component.html',
  styleUrls: ['./candidate-applications-list-item.component.css']
})
export class CandidateApplicationsListItemComponent implements OnInit, OnDestroy {

  @Input() application: ApplicationDTO;
  @Output() applicationSelected = new EventEmitter<void>();
  show = false;
  private feedbackComment: string;
  private ratingValue: number;
  private subscriptions = [];
  private apiUrl = 'http://localhost:3000/api/feedback';

  constructor(public dialog: MatDialog,
              private http: HttpClient) {
  }

  ngOnInit() {

  }

  public get ApplicationStatus() {
    return ApplicationStatus;
  }

  public get InternshipStatus() {
    return InternshipStatus;
  }

  onRate(event: any) {
    this.ratingValue = event.newValue;
  }

  onShowExtraMessage() {
    this.dialog.open(ExtraMessageDialogComponent, {
      data: this.application.extraMessage
    });
  }

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  submitRating() {
    const feedbackDTO = new FeedbackDTO();
    feedbackDTO.anonymous = false;
    feedbackDTO.description = this.feedbackComment;
    feedbackDTO.rating = this.ratingValue;
    feedbackDTO.internshipId = this.application.idInternship;

    this.subscriptions.push(
      this.http.post<FeedbackDTO>(this.apiUrl, feedbackDTO, { headers: this.httpHeaders() })
        .subscribe(res => {
            console.log(res);
            window.location.reload();
          },
          error => console.log(error))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
