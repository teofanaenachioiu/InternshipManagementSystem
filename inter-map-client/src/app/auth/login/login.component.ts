import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormControl, Validators} from '@angular/forms';
import {Role} from '../../core/Role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  hidePassword = true;
  loginMessage: string;
  form: any;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
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
      this.password.hasError('minlength') ? 'Not a valid password' : '';
  }

  login() {
    console.log(this.email.value);
    console.log(this.password.value);

    // stop here if form is invalid
    if (this.isLoginInvalid()) {
      return;
    }

    this.authService.login(this.email.value, this.password.value)
      .subscribe((res) => {
        this.loginMessage = null;

        if (res.role.name === Role.COMPANY) {
          this.router.navigate(['/internship-app/company-profile']);
        } else if (res.role.name === Role.CANDIDATE) {
          this.router.navigate(['/internship-app/candidate-profile']);
        } else {
          console.log('m-am logat insa nu stiu unde sa merg');
        }
      }, (error) => {
        this.loginMessage = 'Wrong credentials';
      });
  }
}
