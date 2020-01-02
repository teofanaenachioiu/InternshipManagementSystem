import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Candidat} from '../../../core/Candidat';


@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  email: string;
  private candidate: Candidat;
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
    this.candidate = new Candidat();
    this.candidate.firstName = 'Teofana';
    this.candidate.lastName = 'Enachioiu';
  }

}
