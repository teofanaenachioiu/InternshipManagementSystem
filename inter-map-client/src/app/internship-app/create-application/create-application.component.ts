import { Component, OnInit } from '@angular/core';
import { InternshipService } from '../internship.service';
import { Application } from '../data/Application';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
  handleError: any;

  constructor(private internshipService: InternshipService) { }

  ngOnInit() {
    
  }

  createApplication(){
    // let application = new Application("candidate2@test.com","126","ok123");
    return this.internshipService.addApplication();
  }

}
