import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from './validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  selectedProfile: string;



  isLinear = true;
  private error = '';
  hidePassword = true;
  hideRetypePassword = true;

  form: any;
  passwordsMatcher = new RepeatPasswordEStateMatcher;
  

  constructor(private formBuilder: FormBuilder) {
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

  
  clickOnAboutYou(){
    console.log("Write about you");
  }

 
}
