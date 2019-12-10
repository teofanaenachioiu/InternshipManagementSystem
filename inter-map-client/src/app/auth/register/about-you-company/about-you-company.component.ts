import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-about-you-company',
  templateUrl: './about-you-company.component.html',
  styleUrls: ['./about-you-company.component.css']
})
export class AboutYouCompanyComponent implements OnInit {
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
      companyName: '',
      phone: '',
      address: '',
      companyDescription: ''
    });
  }
  data() {
    const avatar = this.form.get('avatar').value;
    const companyName = this.form.get('companyName').value;
    const phone = this.form.get('phone').value;
    const address = this.form.get('address').value;
    const companyDescription = this.form.get('companyDescription').value;
  }
  ngOnInit() {
  }


  processFile(imageInput: HTMLInputElement) {
  }

}
