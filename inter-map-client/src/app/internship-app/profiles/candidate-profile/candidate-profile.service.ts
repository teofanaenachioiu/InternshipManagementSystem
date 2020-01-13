import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../../../core/Candidat';
import {User} from '../../../core/User';
import {Experience} from '../../../core/Experience';
import {AuthService} from '../../../auth/auth.service';

const serverUrl = 'localhost:3000';
const httpServerUrl = `http://${serverUrl}`;
const candidateUrl = `${httpServerUrl}/api/secure/candidate`;

@Injectable({
  providedIn: 'root'
})
export class CandidateProfileService {
  isLoading: boolean;
  private token: string;
  private username: string;

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

  constructor(private http: HttpClient, private authService: AuthService) {
    this.isLoading = true;

    this.token = this.authService.currentUserValue.token;
    this.username = this.authService.currentUserValue.username;

    this.getCandidateByEmail(this.username).subscribe(
      (res) => {
        this.candidate = res;

        // TO DELETE THIS
        this.candidate.languages = ['English', 'France'];
        this.isLoading = false;
      },
      (err) => console.log(err),
      () => console.log('done with loading candidate profile!')
    );
  }

  getCandidateByEmail(email: any): Observable<Candidat> {
    return this.http.get<Candidat>(`${candidateUrl}?email=${email}`, this.authHttpOptions());
  }

  updateCandidate() {
    console.log(this.candidate);
    this.http.put<Candidat>(candidateUrl, this.candidate, this.authHttpOptions()).subscribe(res => {
      },
      error => console.log(error)
    );
  }
}
