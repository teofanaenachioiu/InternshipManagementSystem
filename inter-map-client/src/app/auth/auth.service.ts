import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../core/User';
import {AuthModule} from './auth.module';

const authURL = 'http://localhost:3000/api/auth';
interface AuthResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<AuthResponse> {
    const user = new User(email, password);

    return this.httpClient.post<AuthResponse>(`${authURL}/login`, {username: email, password: password}, this.httpOptions)
      .pipe(tap(response => localStorage.setItem('token', response.token)));
  }

  register(email: string, password: string){

  }
}
