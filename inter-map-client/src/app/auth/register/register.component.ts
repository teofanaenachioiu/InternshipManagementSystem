import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from './validators';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  selectedProfile: string;

  keywords = [];

  isLinear = false;
  private error = '';
  hidePassword = true;
  hideRetypePassword = true;

  form: any;
  passwordsMatcher = new RepeatPasswordEStateMatcher();

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.selectedProfile = null;
    this.form = this.formBuilder.group ( {
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),
      passwordAgain: new FormControl(''),
      acceptTerms: new FormControl('', [Validators.requiredTrue])
    }, { validator: RepeatPasswordValidator });
  }

  ngOnInit() {
  }

  clickOnNext() {
    if (this.selectedProfile == null) {
      console.log('Select');
      this.error = 'Choose one option';
    } else {
      this.error = '';
      console.log(this.selectedProfile);
    }
  }


  clickOnAboutYou() {
    console.log("Write about you");

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const passwordAgain = this.form.get('passwordAgain').value;

    if (password === passwordAgain) {
      this.authService.register(email, password)
        .subscribe((res) => {
          console.log(res);
        }, (error) => {
          console.log(error.statusText);
        });
    }
  }


}
