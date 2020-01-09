import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackDTO } from './data/FeedbackDTO';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiUrl = 'http://localhost:3000/api/feedback/internship?id=';
  constructor(private _http: HttpClient) { }

  getFeedbacks(idInternship : any){
    let copie = this.apiUrl;
    copie += idInternship;
    return this._http.get<FeedbackDTO[]>(copie);
  }
}
