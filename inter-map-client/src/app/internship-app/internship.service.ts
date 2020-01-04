import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Internship } from './data/Internship';
import { Application } from './data/Application';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  apiUrl = 'http://localhost:3000/api/internship/all';
  apiUrlAdd = 'http://localhost:3000/api/application';

  constructor(private _http: HttpClient) { }

  getInternships(){
    return this._http.get<Internship[]>(this.apiUrl);
  }

  addApplication(application: Application){

    let postData = {
      idCandidate: application.idCandidate,
      idInternship: application.idInternship,
      extraMessage: application.extraMessage
    }
     this._http.post(this.apiUrlAdd,postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json);
    });
  }

}
