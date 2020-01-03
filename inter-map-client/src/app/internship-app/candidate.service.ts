import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../core/Candidat';
import {User} from '../core/User';
import {tap} from 'rxjs/operators';
import {Sex} from '../core/Sex';

const serverUrl = 'localhost:3000';
const httpServerUrl = `http://${serverUrl}`;
const candidateUrl = `${httpServerUrl}/api/candidate`;

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  candidate = new Candidat();
  isEditPersonalDetails = false;
  private token: string;
  private user: User;

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
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    // this.getCandidateByEmail(this.user.username).subscribe(
    //   (res) => {
    //     this.candidate = res;
    //     console.log(res);
    //   },
    //   (err) => console.log(err),
    //   () => console.log('done!')
    // );
    this.candidate = new Candidat();
    this.candidate.firstName = 'Teofana';
    this.candidate.lastName = 'Enachioiu';
    this.candidate.sex = Sex.F;
    this.candidate.birthDate = new Date(1988, 0, 11);
  }

  getCandidateByEmail(email: any): Observable<Candidat> {
    console.log('in getCandidateByEmail cu emailul ' + email);
    return this.http.get<Candidat>(`${candidateUrl}?email=${email}`, this.authHttpOptions());
  }

  updateCandidate() {
    console.log('doUpdate');
    console.log(this.candidate);
  }
}
