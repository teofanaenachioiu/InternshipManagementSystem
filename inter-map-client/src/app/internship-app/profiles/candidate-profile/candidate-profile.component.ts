import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {CandidateProfileService} from './candidate-profile.service';
import {InterestsService} from '../interests/interests.service';


@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  email: string;
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService, private serviceInt: InterestsService) {
    this.profileForm = this.formBuilder.group({
      personalDetails: [],
      personalDetailsView: [],
      interests: [],
      contact: [],
      studies: [],
      languages: [],
      workExperience: [],
      tellUsMore: []
    });
  }


  ngOnInit() {
    this.service.isEditStudies = false;
    this.service.isEditWorkExperience = false;
    this.service.isEditLanguage = false;
    this.service.isEditDescription = false;
    this.service.isEditContact = false;
    this.service.isEditPersonalDetails = false;
    this.serviceInt.isEditInterests = false;
  }
}
