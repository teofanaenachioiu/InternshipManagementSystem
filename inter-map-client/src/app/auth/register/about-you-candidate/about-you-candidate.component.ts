import {Component, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from '../validators';
import {AuthService} from 'src/app/auth/auth.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {fromEvent, Observable} from "rxjs";
import {pluck} from "rxjs/operators";
import {Candidat} from "../../../core/Candidat";
import {Studies} from "../../../core/Studies";
import {Experience} from "../../../core/Experience";

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
  private fileData: File = null;
  image: any;
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

  clickOnNext(id: string) {
    console.log('update data');
    const firstName = this.form.get('firstName').value;
    const lastName = this.form.get('lastName').value;
    const address = this.form.get('address').value;
    const phone =  this.form.get('phone').value;
    const sex = this.form.get('sex').value;
    const candidate: Candidat = {
      id, // email
    lastName,
    firstName,
    address,
    telephone: phone,
    birthDate: new Date(this.birthDate),
    sex,
    candidateStatus: null,
    languages: null,
    avatar: this.image,
    linkLinkedin: null,
    linkGithub: null,
    description: null,
    applications: null,
    studies: null,
    experiences: null,
    }
    this.authService.updateCandidate(candidate)
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
  ngOnInit() {
  }
}
