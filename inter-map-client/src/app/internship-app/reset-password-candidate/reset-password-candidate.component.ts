import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {EmailValidation, PasswordValidation} from "../../auth/register/validators";

@Component({
  selector: 'app-reset-password-candidate',
  templateUrl: './reset-password-candidate.component.html',
  styleUrls: ['./reset-password-candidate.component.css']
})
export class ResetPasswordCandidateComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  forgotPasswordMessage: string;
  hidePassword = true;
  form: any;
  constructor(private authService: AuthService, private  formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      password: new FormControl('', PasswordValidation),
  });
  }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  resetPassword() {
    const password = this.form.get('password').value;
    console.log(password);
    this.authService.resetPasswordUser(password).subscribe();
  }

}
