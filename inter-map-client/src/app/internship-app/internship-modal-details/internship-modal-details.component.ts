import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FeedbackService } from '../feedback.service';
import { FeedbackDTO } from '../data/FeedbackDTO';

@Component({
  selector: 'app-internship-modal-details',
  templateUrl: './internship-modal-details.component.html',
  styleUrls: ['./internship-modal-details.component.css']
})
export class InternshipModalDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public internship: any ,private router: Router, 
    private feedbackService : FeedbackService) { }
    
  feedbacks : FeedbackDTO[];

  ngOnInit() {
    this.feedbackService.getFeedbacks(this.internship.id).
      subscribe(data => this.feedbacks = data);
      console.log(this.feedbacks);
  }

  createApplication(){
    console.log(this.internship.id);
    console.log(this.feedbacks);
    this.router.navigate(['internship-app/create-application',this.internship.id]);
  }

}
