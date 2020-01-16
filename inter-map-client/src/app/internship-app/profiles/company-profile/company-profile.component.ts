import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyProfileService} from './company-profile.service';
import {InternshipDTO} from '../../data/InternshipDTO';
import {InterestsService} from '../interests/interests.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;

  subscriptions = [];
  internships: InternshipDTO[];
  private error: Error;

  constructor(private formBuilder: FormBuilder, private companyService: CompanyProfileService, private serviceInt: InterestsService) {
    this.profileForm = this.formBuilder.group({
      profile: [],
      interests: [],
      about: []
    });
  }

  ngOnInit() {
    this.companyService.isEditAbout = false;
    this.companyService.isEditProfile = false;
    this.serviceInt.isEditInterests = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
