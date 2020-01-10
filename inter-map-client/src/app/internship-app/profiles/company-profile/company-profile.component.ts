import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyProfileService} from './company-profile.service';
import {InternshipDTO} from '../../data/InternshipDTO';
import {HttpClient} from '@angular/common/http';
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
    // this.loadItems();
  }

  // loadItems() {
  //   this.subscriptions.push(this.companyService.getAllInternships()
  //     .subscribe(internships => this.internships = internships,
  //       error => this.error = error));
  // }

  // getInternships() {
  //   return this.internships;
  // }

  processFile(imageInput: HTMLInputElement) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
