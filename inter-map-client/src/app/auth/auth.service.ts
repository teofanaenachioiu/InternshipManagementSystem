import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../core/User';
import {UserRole} from '../core/UserRole';

const authURL = 'http://localhost:3000/api/auth';
const loginURL = `${authURL}/login`;
const registerURL = `${authURL}/signup`;
const companyURL = 'http://localhost:3000/api/company';
const candidateURL = 'http://localhost:3000/api/candidate';


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
  public email: string;

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
        this.email = email;
        localStorage.setItem('token', user.token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }
  updateCandidate(firstName: string, lastName: string, address: string, phone: string, date: string, image: string | ArrayBuffer, sex: string): Observable<AuthResponse> {
    if (sex) {
      return this.httpClient.put<any>(candidateURL,
        {id: this.email, firstName, lastName, address, telephone: phone, birthDate: date, avatar: image, sex},
        this.httpOptions)
        .pipe(tap(candidate => {
          this.email = this.email;
          console.log(candidate);
        }));
    } else {
      return this.httpClient.put<any>(candidateURL,
        {id: this.email, firstName, lastName, address, telephone: phone, birthDate: date, avatar: image},
        this.httpOptions)
        .pipe(tap(candidate => {
          this.email = this.email;
          console.log(candidate);
        }));
    }
  }
  updateCompany(address: string, companyDescription: string, phone: string, companyName: string, image: string | ArrayBuffer): Observable<AuthResponse> {
    return this.httpClient.put<any>(companyURL,
      {id: this.email, address, description: companyDescription, name: companyName,  telephone: phone, logo: image},
      this.httpOptions)
      .pipe(tap(company => {
        this.email = this.email;
        console.log(company);
      }));
  }

  getCompany(name: string) {
    const  params = new  HttpParams().set('email', name);
    console.log('get');
    return this.httpClient.get<any>(companyURL, {params})
      .pipe(tap((res) => {
        console.log(res);
      }));
  }

  getCandidate(name: string) {
    const  params = new  HttpParams().set('email', name);
    console.log('get');
    return this.httpClient.get<any>(candidateURL, {params})
      .pipe(tap((res) => {
        console.log(res);
      }));
  }

  uploadFieldCompany(fields: string) {
    const  params = new  HttpParams().set('email', this.email);
    this.httpClient.get<any>(companyURL, {params})
      .subscribe((res) => {
        this.uploadFieldsCompany(res.name, res.description, res.logo, res.address, fields, res.telephone).subscribe();
      });
  }

  uploadFieldsCompany(name: string, description: string, logo: string | ArrayBuffer, address: string, fields: string, phone: string): Observable<AuthResponse> {
    return this.httpClient.put<any>(companyURL,
      {id: this.email, address, description, name,  telephone: phone, logo, field: fields},
      this.httpOptions)
      .pipe(tap(company => {
        this.email = this.email;
        console.log(company);
      }));
  }


  logout() {
    // logout pe server
    // TODO
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
