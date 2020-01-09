import { Injectable } from '@angular/core';
import {InternshipDTO} from '../../data/InternshipDTO';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Company} from '../../../core/Company';

const apiUrl = 'http://localhost:3000/api/internship';
const companyUrl = 'http://localhost:3000/api/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {
  isLoading: boolean;
  internships: InternshipDTO[] = [];
  companyUsername: string;
  statuses: string[] = ['Open', 'Closed'];

  company: Company = new Company();

  isEditProfile = false;

  private internshipsSubject: BehaviorSubject<InternshipDTO[]> = new BehaviorSubject<InternshipDTO[]>([]);
  private selectedInternshipId: number = null;

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
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.companyUsername = currentUser.username;
    this.loadInternships();

    this.getCompanyByEmail(this.companyUsername).subscribe(
      (res) => {
        this.company = res;
        console.log(res);

        this.isLoading = false;
      },
      (err) => console.log(err),
      () => console.log('done with loading company profile!')
    );
  }

  getCompanyByEmail(email: any): Observable<Company> {
    return this.httpClient.get<Company>(`${companyUrl}?email=${email}`, this.authHttpOptions());
  }

  updateCompany() {
    console.log(this.company);
    // this.httpClient.put<Company>(companyUrl, this.company, this.authHttpOptions()).subscribe(res => {
    //   },
    //   error => console.log(error)
    // );
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

  public setSelectedInternshipId(id) {
    this.selectedInternshipId = id;
  }

  public getSelectedInternshipId() {
    return this.selectedInternshipId;
  }

  // public updateCompany(company: Company) {
  //   this.company = company;
  // }
}
