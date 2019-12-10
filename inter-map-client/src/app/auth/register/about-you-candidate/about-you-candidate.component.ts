import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator} from '../validators';
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
  items;
  checkoutForm;
  dateOfBirth: any;
  form: any;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {

    this.form = this.formBuilder.group({
      avatar: '',
      name: '',
      surname: '',
      dateOfBirth: new Date(1998, 0, 1),
      sex: Sex,
      address: '',
      phone: ''
    });
  }
  ngOnInit() {
  }
  data() {
    const avatar = this.form.get('avatar').value;
    const name = this.form.get('name').value;
    const surname = this.form.get('surname').value;
    const dateOfBirth = this.form.get('dateOfBirth').value;
    const sex = this.form.get('sex').value;
    const address = this.form.get('address').value;
    const phone = this.form.get('phone').value;
  }
  processFile(imageInput: HTMLInputElement) {
  }
}
