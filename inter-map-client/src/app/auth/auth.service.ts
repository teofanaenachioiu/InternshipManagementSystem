import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../core/User';
import {UserRole} from '../core/UserRole';
import {Company} from '../core/Company';
import {Candidat} from '../core/Candidat';
import {Message} from '../core/Message';

const authURL = 'http://localhost:3000/api/auth';
const loginURL = `${authURL}/login`;
const registerURL = `${authURL}/signup`;
const areaOfInterest = 'http://localhost:3000/api/secure/areaOfInterest';
const resetURL = `${authURL}/reset`;
const companyURL = 'http://localhost:3000/api/secure/company';
const candidateURL = 'http://localhost:3000/api/secure/candidate';


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

  authHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
    return httpOptions;
  }

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
        this.email = email;
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
  updateCandidate(candidate: Candidat): Observable<AuthResponse> {
      return this.httpClient.put<any>(candidateURL,
        candidate,
        this.authHttpOptions())
        .pipe(tap(candidate1 => {
          this.email = this.email;
          console.log(candidate1);
        }));
  }
  updateCompany(company: Company): Observable<AuthResponse> {
    return this.httpClient.put<any>(companyURL, company,
      this.httpOptions)
      .pipe(tap(company1 => {
        this.email = this.email;
        console.log(company1);
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
        const company: Company = {
          id: res.id,
          name: res.name,
          telephone: res.telephone,
          field: fields,
          description: res.description,
          address: res.adress,
          logo: res.logo,
        };
        this.updateCompany(company).subscribe();
        });
  }

  uploadAreaOfInterestCandidate(fields: string[]) {
    const  params = new  HttpParams().set('email', this.email);
    this.httpClient.get<any>(candidateURL, {params})
      .subscribe((res) => {
        const postBody = {
          yourParam: [ 'JAVA', 'AI' ]
        };
        return this.httpClient.put<any>(candidateURL, {areaOfInterest: fields}, { params } )
          .pipe(tap((res1) => {
            console.log(res1);
          })).subscribe();
      });
  }


  getAreaOfInterest() {
    return this.httpClient.get<any>(areaOfInterest)
      .pipe(tap((res) => {
        console.log(res);
      }));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


  forgetPassword(email: string) {
    const user = new User();
    user.username = email;
    return this.httpClient.post<Message>(`${authURL}/forgot`, user, this.httpOptions).subscribe(res => {
      alert('Send');
    }, error => {alert('Error'); });
  }

  resetPassword(emailHash: string, password: any) {
    return this.httpClient.post<any>(resetURL, {username: emailHash, password}, this.httpOptions);
  }

  resetPasswordUser(password: any) {
    return this.httpClient.post<any>(resetURL, {username: this.currentUserValue.username, password}, this.httpOptions);
  }
}
