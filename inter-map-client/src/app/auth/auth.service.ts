import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../core/User';
import {UserRole} from '../core/UserRole';

const authURL = 'http://localhost:3000/api/auth';
const loginURL = `${authURL}/login`;
const registerURL = `${authURL}/signup`;

interface AuthResponse {
  token: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.httpClient.post<any>(loginURL, {username: email, password}, this.httpOptions)
      .pipe(tap(user => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }

  register(email: string, password: string, role: string): Observable<AuthResponse> {
    return this.httpClient.post<any>(registerURL, {username: email, password, role: {name: role}}, this.httpOptions)
      .pipe(tap(user => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }

  logout() {
    // logout pe server
    // TODO

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
