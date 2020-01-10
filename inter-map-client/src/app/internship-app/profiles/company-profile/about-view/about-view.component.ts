import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../../core/Candidat';
import {CandidateProfileService} from '../../candidate-profile/candidate-profile.service';
import {CompanyProfileService} from '../company-profile.service';
import {Company} from '../../../../core/Company';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {
  private company: Company;

  constructor(private service: CompanyProfileService) {
  }

  ngOnInit() {
    this.company = this.service.company;
  }

  makeEditable() {
    this.service.isEditAbout = true;
  }
}
