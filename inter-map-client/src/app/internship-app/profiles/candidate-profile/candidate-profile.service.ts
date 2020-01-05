import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../../../core/Candidat';
import {User} from '../../../core/User';
import {Experience} from '../../../core/Experience';

const serverUrl = 'localhost:3000';
const httpServerUrl = `http://${serverUrl}`;
const candidateUrl = `${httpServerUrl}/api/candidate`;

@Injectable({
  providedIn: 'root'
})
export class CandidateProfileService {
  isLoading: boolean;
  private token: string;
  private user: User;

  candidate = new Candidat();
  isEditPersonalDetails = false;
  isEditContact = false;
  isEditDescription = false;
  isEditLanguage = false;
  isEditWorkExperience = false;
  isEditStudies = false;


  authHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
    return httpOptions;
  }

  constructor(private http: HttpClient) {
    this.isLoading = true;
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.getCandidateByEmail(this.user.username).subscribe(
      (res) => {
        this.candidate = res;
        console.log(res);
        this.isLoading = false;
        const exp = new Experience();
        exp.companyName = 'Arobs';
        exp.endDate = new Date(2018, 11, 10);
        exp.startDate = new Date(2018, 10, 10);
        exp.jobName = 'intern';
        this.candidate.experiences = [exp];
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
  }

  getCandidateByEmail(email: any): Observable<Candidat> {
    return this.http.get<Candidat>(`${candidateUrl}?email=${email}`, this.authHttpOptions());
  }

  updateCandidate() {
    // this.http.put(candidateUrl, this.candidate, this.authHttpOptions());
    console.log(this.candidate);
  }
}
