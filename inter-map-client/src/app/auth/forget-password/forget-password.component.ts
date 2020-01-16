import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/auth/auth.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  forgotPasswordMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  sendMail() {
    if (this.email.invalid) { return; }
    const email = this.email.value;
    this.authService.forgetPassword(email);
    this.router.navigate(['']);
  }
}
