import { Injectable } from '@angular/core';
import {Internship} from '../../data/Internship';
import {InternshipDTO} from '../../data/InternshipDTO';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/api/internship';

interface Response {
  hasNext: boolean;
  hasPrevious: boolean;
  nbPages: number;
  content: InternshipDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  internships: InternshipDTO[] = [];
  companyUsername: string;
  statuses: string[] = ['open', 'pending', 'closed'];

  private internshipsSubject: BehaviorSubject<InternshipDTO[]> = new BehaviorSubject<InternshipDTO[]>([]);

  constructor(private httpClient: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.companyUsername = currentUser.username;
    // this.internships.push(new InternshipDTO(
    //   '1',
    //   'Java',
    //   'Become a Java dev',
    //   'open',
    //   new Date(Date.now()),
    //   new Date(Date.UTC(2020, 1, 15)),
    //   new Date(Date.UTC(2020, 3, 15)),
    //   3,
    //   'Cluj-Napoca',
    //   0,
    //   true,
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWE3zHTMlhOEI2JgXAOS8p8vD2yZObgDylJsAJzJDA6fZuXfF&s',
    //   4,
    //   'asdsa',
    //   '1',
    //   this.companyUsername
    // ));
    this.loadInternships();
  }

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  loadInternships() {
    const params = new HttpParams()
      .set('company', 'company');

    this.httpClient.get(`${apiUrl}/company/all/`, {params, headers: this.httpHeaders()})
      .subscribe(
        (resp: Response) => {
          console.log(resp);
          this.internshipsSubject.next(resp.content);
      },
        error => {
          console.log(error);
        });
  }

  public getAllInternships(): Observable<InternshipDTO[]> {
    return this.internshipsSubject.asObservable();
  }

  public removeInternship(internshipDTO: InternshipDTO, index) {
    const params = new HttpParams()
      .set('id', internshipDTO.id);

    this.httpClient.delete(apiUrl, {params, headers: this.httpHeaders()})
      .subscribe(resp => console.log(resp),
        error => console.log(error));

    // const internships = this.internshipsSubject.value;
    // internships.splice(index, 1);
    // this.internshipsSubject.next(internships);
  }

  public addInternship(internship: InternshipDTO) {
    const internships = this.internshipsSubject.value;
    internships.push(internship);
    this.internshipsSubject.next(internships);
  }

  public updateInternship(internship: InternshipDTO) {
    for (let i = 0; i < this.internships.length; i++) {
      if (this.internships[i].name === internship.name) {
        this.internships[i] = internship;
        return;
      }
    }
  }
}
