import { Injectable } from '@angular/core';
import {Internship} from '../../data/Internship';
import {InternshipDTO} from '../../data/InternshipDTO';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {Company} from '../../../core/Company';

const apiUrl = 'http://localhost:3000/api/internship';


@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  internships: InternshipDTO[] = [];
  companyUsername: string;
  statuses: string[] = ['Open', 'Closed'];

  company: Company = new Company();

  isEditProfile = false;

  private internshipsSubject: BehaviorSubject<InternshipDTO[]> = new BehaviorSubject<InternshipDTO[]>([]);

  constructor(private httpClient: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.companyUsername = currentUser.username;
    this.loadInternships();

    this.company.name = 'BIRU SFTW';
    this.company.email = this.companyUsername;
    this.company.phone = '0777777777';
  }

  httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  loadInternships() {
    const params = new HttpParams()
      .set('company', this.companyUsername);

    this.httpClient.get(`${apiUrl}/company/all`, {params, headers: this.httpHeaders()})
      .subscribe(
        (resp: InternshipDTO[]) => {
          console.log(resp);
          this.internshipsSubject.next(resp);
      },
        error => {
          console.log(error);
        });
  }

  public getAllInternships(): Observable<InternshipDTO[]> {
    return this.internshipsSubject.asObservable();
  }

  public removeInternship(internshipDTO: InternshipDTO) {
    const params = new HttpParams()
      .set('id', internshipDTO.id);

    this.httpClient.delete(`${apiUrl}`, {params, headers: this.httpHeaders()})
      .subscribe((resp: InternshipDTO)  => {
          const internships = this.internshipsSubject.value;
          for (let i = 0; i < internships.length; i++) {
            if (internships[i].id === resp.id) {
              internships.splice(i, 1);
              break;
            }
          }
          this.internshipsSubject.next(internships);
        },
        error => console.log(error));
  }

  public addInternship(internship: InternshipDTO) {
    console.log('service add');
    console.log(internship);

    this.httpClient.post(`${apiUrl}`, internship, {headers: this.httpHeaders()})
      .subscribe((resp: InternshipDTO) => {
        console.log('resp');
        console.log(resp);
        const internships = this.internshipsSubject.value;
        internships.push(resp);
        this.internshipsSubject.next(internships);
      },
        error => console.log(error));
  }

  public updateInternship(internship: InternshipDTO) {
    this.httpClient.put(`${apiUrl}`, internship, {headers: this.httpHeaders()})
      .subscribe((resp: InternshipDTO) => {
        for (let i = 0; i < this.internships.length; i++) {
          if (this.internships[i].id === internship.id) {
            this.internships[i] = internship;
            return;
          }
        }
      },
        error => console.log(error));
  }

  public updateCompany(company: Company) {
    this.company = company;
  }
}
