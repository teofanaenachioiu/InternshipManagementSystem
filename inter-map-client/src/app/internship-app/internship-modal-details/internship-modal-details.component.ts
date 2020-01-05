import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-internship-modal-details',
  templateUrl: './internship-modal-details.component.html',
  styleUrls: ['./internship-modal-details.component.css']
})
export class InternshipModalDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public internship: any ,private router: Router) { }

  ngOnInit() {
  }

  createApplication(){
    this.router.navigate(['internship-app/create-application',this.internship.id]);
  }

}
