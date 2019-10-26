import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CandidateDTO} from '../core/CandidateDTO';
import {AuthModule} from './auth.module';

const authURL = 'http://localhost:8080/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<CandidateDTO> {
    return this.httpClient.post<CandidateDTO>(authURL + '/login', {email, password}, {responseType: 'text' as 'json'})
      .pipe();
  }
}
