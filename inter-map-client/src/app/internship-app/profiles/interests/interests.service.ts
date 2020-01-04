import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../core/User';

const serverUrl = 'localhost:3000';
const httpServerUrl = `http://${serverUrl}`;
const interestsUrl = `${httpServerUrl}/api/candidate`;

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  isLoading = false;
  isEditInterests = false;
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
    this.isLoading = true;
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    // this.getAllInterests(this.user.username).subscribe(
    //   (res) => {
    //     this.interests = res;
    //     console.log(res);
    //     this.isLoading = false;
    //   },
    //   (err) => console.log(err),
    //   () => console.log('done!')
    // );

    this.interests = ['java', '.net', 'c#', 'php', 'frontend', 'backend', 'angular', 'networking'];
    this.interestsUser = ['java', '.net'];
    this.isLoading = false;
  }

  getAllInterests(): Observable<string[]> {
    return this.http.get<string[]>(`${interestsUrl}`, this.authHttpOptions());
  }

  getAllUserInterests(email: any): Observable<string[]> {
    return this.http.get<string[]>(`${interestsUrl}`, this.authHttpOptions());
  }

  updateInterests(fruits: string[]) {
    this.interestsUser = fruits;
    console.log(fruits);
  }
}
