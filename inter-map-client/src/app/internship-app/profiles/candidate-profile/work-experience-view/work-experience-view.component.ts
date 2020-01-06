import {Component, OnInit} from '@angular/core';
import {CandidateProfileService} from '../candidate-profile.service';
import {Experience} from '../../../../core/Experience';

@Component({
  selector: 'app-work-experience-view',
  templateUrl: './work-experience-view.component.html',
  styleUrls: ['./work-experience-view.component.css']
})
export class WorkExperienceViewComponent implements OnInit {
  private experiences: Experience[];

  constructor(private service: CandidateProfileService) {
  }

  ngOnInit() {
    this.experiences = this.service.candidate.experiences;
  }

  makeEditable() {
    this.service.isEditWorkExperience = true;
  }
}
