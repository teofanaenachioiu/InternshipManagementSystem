import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipSelectionChange} from '@angular/material';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      personalDetails: [],
      interests: [],
      contact: [],
      studies: [],
      languages: [],
      workExperience: [],
      tellUsMore: []
    });
  }


  ngOnInit() {
  }
}
