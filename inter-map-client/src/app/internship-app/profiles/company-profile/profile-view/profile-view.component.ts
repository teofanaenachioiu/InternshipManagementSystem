import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompanyProfileService} from '../company-profile.service';
import {Company} from '../../../../core/Company';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  private isEditMode: boolean;
  previewUrl: any = null;
  company: Company;

  constructor(private service: CompanyProfileService) { }

  ngOnInit() {
    this.company = this.service.company;
  }

  makeEditable() {
    this.service.isEditProfile = true;
  }

}
