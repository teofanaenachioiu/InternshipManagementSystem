import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';
import {Message} from '../../core/Message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.subject);
    console.log(this.phone);
    console.log(this.message);
    const message = new Message(this.name, this.email, this.subject, this.phone, this.message);

    this.contactService.sendMessageContact(message);
  }
}
