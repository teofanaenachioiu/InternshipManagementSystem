import { Component, OnInit } from '@angular/core';
import { InternshipService } from '../internship.service';
import { Application } from '../data/Application';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
  coverLetter : string;
  id : string;
  constructor(private internshipService: InternshipService,private authService : AuthService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  createApplication(){
    console.log(this.coverLetter);
    console.log(this.authService.currentUserValue.username);
    console.log(this.id);
    let application = new Application(this.authService.currentUserValue.username,this.id,this.coverLetter);
    this.internshipService.addApplication(application);
    this.router.navigate(['internship-app/internships']);
  }

}
