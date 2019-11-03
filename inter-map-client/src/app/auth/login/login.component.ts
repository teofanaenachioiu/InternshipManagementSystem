import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  hidePassword = true;
  loginMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  checkLoginButton() {
    return this.email.hasError('required') ||
      this.password.hasError('required') ||
      this.email.hasError('email') ||
      this.password.hasError('minLength');
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minLength') ? 'Not a valid password' : '';
  }

  login() {
    console.log(this.email.value);
    console.log(this.password.value);
    console.log(this.loginMessage);
    // this.authService.authenticate(this.email, this.password)
    //   .subscribe((res) => {
    //     this.router.navigate([`/........`]);
    //   }, (error) => {
    //     this.loginMessage = error;
    //   });
    // }
    console.log('login!');
  }

  forgetPassword() {
    console.log('forget password!');
  }


}
