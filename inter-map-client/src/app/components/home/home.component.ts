import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact/contact.service';
import {Message} from '../../core/Message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }



  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
