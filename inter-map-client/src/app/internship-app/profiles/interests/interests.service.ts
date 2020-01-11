import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../core/User';
import {error} from 'util';

const serverUrl = 'localhost:3000';
const httpServerUrl = `http://${serverUrl}`;
const interestsUrl = `${httpServerUrl}/api/areaOfInterest`;

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  isLoading = true;
  isEditInterests = false;
  private isLoadingAll = true;
  private isLoadingUser = true;
  private token: string;
  private user: User;
  interests: string[];
  interestsUser: string[];

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

    this.getAllUserInterests(this.user.username).subscribe(
      (res) => {
        this.interestsUser = res;
        console.log('user interests');
        console.log(res);
        this.isLoadingUser = false;
        this.isLoading = this.isLoadingAll && this.isLoadingUser;
      },
      (err) => console.log(err),
      () => console.log('done with loading user interests!')
    );

    this.getAllInterests().subscribe(
      (res) => {
        this.interests = res;
        console.log('interests');
        console.log(res);
        this.isLoadingAll = false;
        this.isLoading = this.isLoadingAll && this.interestsUser;
      },
      (err) => console.log(err),
      () => console.log('done with loading interests!')
    );
  }

  getAllInterests(): Observable<string[]> {
    return this.http.get<string[]>(`${interestsUrl}`, this.authHttpOptions());
  }

  getAllUserInterests(email: any): Observable<string[]> {
    return this.http.get<string[]>(`${interestsUrl}/all?email=${email}`, this.authHttpOptions());
  }

  updateInterests() {
    console.log(this.interestsUser);
    const el = `${interestsUrl}?email=${this.user.username}`;
    console.log(el);
    this.http.put<any>(el, this.interestsUser, this.authHttpOptions());
  }
}
