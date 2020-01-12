import {Component, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from '../validators';
import {AuthService} from 'src/app/auth/auth.service';
import {Company} from '../../../core/Company';
import {fromEvent, Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
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
  private fileData: File = null;
  image: any;
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

  clickOnNext(id: string) {
    console.log('update data');
    const address = this.form.get('address').value;
    const companyDescription = this.form.get('companyDescription').value;
    const phone = this.form.get('phone').value;
    const companyName = this.form.get('companyName').value;
    const company: Company = {
      id,
      name: companyName,
      telephone: phone,
      field: '',
      description: companyDescription,
      address,
      logo: this.image,
    };

    this.authService.updateCompany(company)
      .subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log((error.status));
      });
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.onUploadImage();
  }

  onUploadImage() {
    const fileReader = new FileReader();
    this.imageToBase64(fileReader, this.fileData)
      .subscribe(base64image => {
        this.image = base64image.split(',')[1];
      });
  }

  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }
}
