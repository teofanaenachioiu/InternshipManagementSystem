import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyProfileService} from '../profiles/company-profile/company-profile.service';
import {Candidat} from '../../core/Candidat';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {InternshipCandidateDTO} from '../data/InternshipCandidateDTO';
import {ApplicationStatus} from '../data/ApplicationDTO';

@Component({
  selector: 'app-internship-candidates',
  templateUrl: './internship-candidates.component.html',
  styleUrls: ['./internship-candidates.component.css']
})
export class InternshipCandidatesComponent implements OnInit, OnDestroy {

  private subscriptions = [];
  private internshipId;
  private candidates: InternshipCandidateDTO[] = [];
  private getUrl = 'http://localhost:3000/api/application/InternshipCandidates';

  constructor(private companyService: CompanyProfileService,
              private http: HttpClient) { }

  ngOnInit() {
    // this.internshipId = this.companyService.getSelectedInternshipId();
    this.internshipId = '123';
    console.log(this.internshipId);
    this.loadCandidates();
  }

  public get applicationStatus() {
    return ApplicationStatus;
  }

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  loadCandidates() {
    const params = new HttpParams()
      .set('internship_id', this.internshipId);

    this.subscriptions.push(
      this.http.get<InternshipCandidateDTO[]>(`${this.getUrl}`, {params, headers: this.httpHeaders()})
        .subscribe(res => {
          this.candidates = res;
          console.log(this.candidates);
        }, error => console.log(error))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
