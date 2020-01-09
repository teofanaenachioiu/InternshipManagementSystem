import {Component, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from '../validators';
import {AuthService} from 'src/app/auth/auth.service';
import {Company} from "../../../core/Company";
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-about-you-company',
  templateUrl: './about-you-company.component.html',
  styleUrls: ['./about-you-company.component.css']
})

export class AboutYouCompanyComponent implements OnInit {
  form: any;
  private error = '';
  toArray: string[];
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.form =  this.formBuilder.group({
      address: new FormControl(''),
      companyDescription: new FormControl(''),
      phone: new FormControl(''),
      companyName: new FormControl(''),
    });
  }
  ngOnInit() {
  }

  clickOnNext() {
    console.log('update data');
    const address = this.form.get('address').value;
    const companyDescription = this.form.get('companyDescription').value;
    const phone = this.form.get('phone').value;
    const companyName = this.form.get('companyName').value;

    let img = null;
    if ( this.toArray != null ) {
      img = this.toArray[1];
    }
  //   let company: Company = {
  //     id: '',
  //     name: companyName,
  //     telephone: phone,
  //     field: '',
  //     description: companyDescription,
  //     address,
  //     logo: img;
  //
  //
  // }
    this.authService.updateCompany(address, companyDescription, phone, companyName, img)
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

}
