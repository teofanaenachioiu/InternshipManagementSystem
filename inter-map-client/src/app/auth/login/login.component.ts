import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  // constructor(private authService: AuthService, private router: Router) {
  // }

  constructor() {}

  ngOnInit() {
  }

   login() {
    console.log(this.email);
    console.log(this.password);
    // if (this.email === '' || this.password === '') {
      // this.errorText = 'Username and password fields are required';
    // } else {
      // this.authService.authenticate(this.email, this.password)
      //   .subscribe((res) => {
      //     this.router.navigate([`/manager`]);
      //   }, (error) => {
      //     this.email = null;
      //     this.password = null;
      //     console.log(error);
      //   });
    // }
    console.log('login!');
   }

  forgetPassword() {
    console.log('forget password!');
  }
}
