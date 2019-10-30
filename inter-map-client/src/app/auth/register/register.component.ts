import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



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
  email = new FormControl('', [Validators.required, Validators.email]);
  password: string;
  retypePassword: string;
  hidePassword = true;
  hideRetypePassword = true;

  constructor() {
    this.selectedProfile = null;
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

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  testButton(){
    console.log(this.email.value);
    console.log(this.password);
    console.log(this.retypePassword);
  }

}
