import {Component, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from '../validators';
import {AuthService} from 'src/app/auth/auth.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

enum Sex {
  M,
  F,
  O
}

@Component({
  selector: 'app-about-you-candidate',
  templateUrl: './about-you-candidate.component.html',
  styleUrls: ['./about-you-candidate.component.css']
})
export class AboutYouCandidateComponent implements OnInit {
  // items;
  // checkoutForm;
  // dateOfBirth: any;
  form: any;
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.form =  this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      sex: new FormControl(''),
    });
  }
  toArray: string[];
  birthDate = '';

  addDate(type: string, event: MatDatepickerInputEvent<any>) {
    const selectedDate = new Date(event.value);
    this.birthDate = '';
    this.birthDate = this.birthDate.concat(selectedDate.getFullYear().toString());
    this.birthDate = this.birthDate.concat('-');
    if (selectedDate.getMonth() + 1 < 10) {
      this.birthDate = this.birthDate.concat('0');
    }
    this.birthDate = this.birthDate.concat((selectedDate.getMonth() + 1).toString());
    this.birthDate = this.birthDate.concat('-');
    if (selectedDate.getDate() < 10) {
      this.birthDate = this.birthDate.concat('0');
    }
    this.birthDate = this.birthDate.concat(selectedDate.getDate().toString());
  }

  clickOnNext() {
    console.log('update data');
    const firstName = this.form.get('firstName').value;
    const lastName = this.form.get('lastName').value;
    const address = this.form.get('address').value;
    const phone =  this.form.get('phone').value;
    const sex = this.form.get('sex').value;
    let img = null;
    if ( this.toArray != null ) {
      img = this.toArray[1];
    }
    this.authService.updateCandidate(firstName, lastName, address, phone, this.birthDate, img, sex)
      .subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log((error.status));
      });
  }
  processFile(imageInput: any) {
    const file = imageInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.toArray = reader.result.split(',');
      }
    };
  }
  ngOnInit() {
  }
}
