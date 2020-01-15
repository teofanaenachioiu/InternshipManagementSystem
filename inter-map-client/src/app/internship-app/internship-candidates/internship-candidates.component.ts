import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyProfileService} from '../profiles/company-profile/company-profile.service';
import {Candidat} from '../../core/Candidat';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {InternshipCandidateDTO} from '../data/InternshipCandidateDTO';
import {ApplicationStatus} from '../data/ApplicationDTO';

class CandidateToCheck extends InternshipCandidateDTO {
  checked = false;
}

@Component({
  selector: 'app-internship-candidates',
  templateUrl: './internship-candidates.component.html',
  styleUrls: ['./internship-candidates.component.css']
})
export class InternshipCandidatesComponent implements OnInit, OnDestroy {

  private subscriptions = [];
  private internshipId;
  private candidatesToCheck: CandidateToCheck[] = [];
  private apiUrl = 'http://localhost:3000/api/secure/application';
  private getUrl = `${this.apiUrl}/InternshipCandidates`;
  private allChecked = false;

  constructor(private companyService: CompanyProfileService,
              private http: HttpClient) { }

  ngOnInit() {
    this.internshipId = this.companyService.getSelectedInternshipId();
    // this.internshipId = '123';
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
      this.http.get<InternshipCandidateDTO[]>(`${this.getUrl}`, { params, headers: this.httpHeaders() })
        .subscribe(res => {
          this.candidatesToCheck = res as CandidateToCheck[];
          this.candidatesToCheck.forEach(c => c.checked = false);
          console.log(this.candidatesToCheck);
        }, error => console.log(error))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  changeChecked(event: any, candidate: InternshipCandidateDTO) {
    const checked = event.checked;
    let all = true;
    for (let i = 0; i < this.candidatesToCheck.length; i++) {
      if (this.candidatesToCheck[i].email === candidate.email) {
        this.candidatesToCheck[i].checked = checked;
      }
      if (!this.candidatesToCheck[i].checked) {
        all = false;
      }
    }
    this.allChecked = all;
    console.log(this.candidatesToCheck);
  }

  checkAll(event: any) {
    this.allChecked = event.checked;
    this.candidatesToCheck.forEach(c => c.checked = this.allChecked);
    console.log(this.candidatesToCheck);
  }

  updateCandidate(candidate: InternshipCandidateDTO, status: ApplicationStatus) {
    const params = new HttpParams()
      .set('candidate_email', candidate.email)
      .set('internship_id', this.internshipId)
      .set('status', status);

    this.subscriptions.push(
      this.http.put(this.apiUrl, {}, { params, headers: this.httpHeaders() })
        .subscribe(res => {
          console.log(res);
          candidate.status = status;
        }, error => console.log(error))
    );
  }

  updateCandidates(status: ApplicationStatus) {
    this.candidatesToCheck.forEach(candidate => {
      if (candidate.checked) {
        this.updateCandidate(candidate, status);
      }
    });
  }

}
