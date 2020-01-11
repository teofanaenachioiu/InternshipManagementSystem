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
  private previewUrl: any = 'assets/img/no-photo.png';
  private company: Company;

  constructor(private service: CompanyProfileService) {
  }

  ngOnInit() {
    this.company = this.service.company;
    console.log("HOLAAA");
    console.log(this.company);
    if (this.company.logo != null) {
      this.previewUrl = 'data:image/jpeg;base64,' + this.company.logo;
    }
  }

  makeEditable() {
    this.service.isEditProfile = true;
  }

}
