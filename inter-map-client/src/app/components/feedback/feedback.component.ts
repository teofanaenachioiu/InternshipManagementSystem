import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  items: any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {title: 'title', date: '14 November 2017', internship: 'internship title', username: 'username', hidden: false},
      {title: 'title', date: '15 November 2017', internship: 'internship title', username: 'username', hidden: true},
      {title: 'title', date: '15 December 2017', internship: 'internship title', username: 'username', hidden: true},
      {title: 'title', date: '17 December 2017', internship: 'internship title', username: 'username', hidden: true},
      {title: 'title', date: '20 December 2017', internship: 'internship title', username: 'username', hidden: true}
      ];
  }

  toggle(items: any, item: any) {
    for (const itemm of items) {
        itemm.hidden = true;
    }
    item.hidden = !item.hidden;
  }

}
