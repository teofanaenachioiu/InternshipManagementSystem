import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from '../../core/Message';

const contactURL = 'http://localhost:3000/api/home/email';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  sendMessageContact(message: Message): any {
    return this.httpClient.post<Message>(contactURL, message, this.httpOptions);
  }
}
