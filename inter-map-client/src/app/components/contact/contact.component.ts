import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.subject);
    console.log(this.phone);
    console.log(this.message);
  }
}
