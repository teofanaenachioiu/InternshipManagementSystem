import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Candidat} from '../../../core/Candidat';
import {CandidateService} from '../../candidate.service';


@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  email: string;
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CandidateService) {
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
  }
}
