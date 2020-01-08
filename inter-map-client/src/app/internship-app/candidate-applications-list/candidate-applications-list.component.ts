import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Internship} from '../data/Internship';
import {ApplicationDTO} from '../data/ApplicationDTO';
import {InternshipService} from '../internship.service';

@Component({
  selector: 'app-candidate-applications-list',
  templateUrl: './candidate-applications-list.component.html',
  styleUrls: ['./candidate-applications-list.component.css']
})
export class CandidateApplicationsListComponent implements OnInit, OnDestroy {

  subscriptions = [];
  applications: ApplicationDTO[];
  error: Error;

  @Output() internshipWasSelected = new EventEmitter<Internship>();



  constructor(private service: InternshipService) {
  }

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
    const username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.subscriptions.push(this.service.getAllApplicationsByCandidate(username)
      .subscribe(applications => this.applications = applications,
        error => this.error = error));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
