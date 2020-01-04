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

  addApplication(){

    let postData = {
      idCandidate: 'candidate2@test.com',
      idInternship: "125",
      extraMessage: "ultimul"
    }
     this._http.post(this.apiUrlAdd,postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json);
    });
  }

}
