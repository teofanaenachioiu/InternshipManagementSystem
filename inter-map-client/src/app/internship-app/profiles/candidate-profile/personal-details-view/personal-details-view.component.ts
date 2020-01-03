import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../../core/Candidat';
import {CandidateService} from '../../../candidate.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-personal-details-view',
  templateUrl: './personal-details-view.component.html',
  styleUrls: ['./personal-details-view.component.css']
})
export class PersonalDetailsViewComponent implements OnInit {
  private candidate: Candidat;
  private isEditMode: boolean;
  previewUrl: any = null;
  dateFormatted: string;
  constructor( private service: CandidateService) {
  }
  ngOnInit(): void {
    this.isEditMode = false;
    this.candidate = this.service.candidate;
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    this.dateFormatted =  formatDate(this.candidate.birthDate, format, locale);
    this.previewUrl = 'https://image.flaticon.com/icons/png/512/21/21294.png';
  }

  makeEditable() {
    this.service.isEditPersonalDetails = true;
  }
}
