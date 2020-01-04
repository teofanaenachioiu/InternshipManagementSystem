import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../../core/Candidat';
import {CandidateProfileService} from '../candidate-profile.service';
import {formatDate} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-personal-details-view',
  templateUrl: './personal-details-view.component.html',
  styleUrls: ['./personal-details-view.component.css']
})
export class PersonalDetailsViewComponent implements OnInit {
  private candidate: Candidat;
  private previewUrl: any = 'assets/img/no-photo.png';
  dateFormatted: string;

  constructor(private service: CandidateProfileService) {
  }

  ngOnInit(): void {
    this.candidate = this.service.candidate;
    if (this.candidate.avatar != null) {
      this.previewUrl = 'data:image/jpeg;base64,' + this.candidate.avatar;
    }
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    this.dateFormatted = formatDate(this.candidate.birthDate, format, locale);
  }

  makeEditable() {
    this.service.isEditPersonalDetails = true;
  }
}
