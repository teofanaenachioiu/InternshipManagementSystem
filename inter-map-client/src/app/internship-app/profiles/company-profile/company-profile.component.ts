import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Internship} from '../../data/Internship';
import {CompanyProfileService} from './company-profile.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private companyService: CompanyProfileService) {
    this.profileForm = this.formBuilder.group({
      profile: [],
      interests: [],
      about: []
    });

  }

  getInternships() {
    return this.companyService.getInternships();
  }

  ngOnInit() {
  }

  processFile(imageInput: HTMLInputElement) {
  }
}
