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

  isLoginInvalid() {
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
    if (!this.isLoginInvalid()) {
      this.authService.authenticate(this.email.value, this.password.value)
        .subscribe((res) => {
          this.loginMessage = null;
          console.log(res);
        }, (error) => {
          console.log(error);
          this.loginMessage = 'Wrong credentials';
        });
    }
  }
}
