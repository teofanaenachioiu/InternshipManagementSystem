import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../core/Candidat';

const serverUrl = 'localhost:3000';
const httpServerUrl = `http://${serverUrl}`;
const candidateUrl = `${httpServerUrl}/api/candidate`;

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private token: string;

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
  }

  getCandidateByEmail(email: any): Observable<Candidat> {
    return this.http.get<Candidat>(`${candidateUrl}/${email}`, this.authHttpOptions());
  }
}
