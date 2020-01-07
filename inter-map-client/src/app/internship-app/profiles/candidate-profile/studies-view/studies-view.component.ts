import {Component, OnInit} from '@angular/core';
import {CandidateProfileService} from '../candidate-profile.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-studies-view',
  templateUrl: './studies-view.component.html',
  styleUrls: ['./studies-view.component.css']
})
export class StudiesViewComponent implements OnInit {
  studies: any;

  constructor(private service: CandidateProfileService) {
  }

  formatDate(date: Date): string {
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    return formatDate(date, format, locale);
  }

  ngOnInit() {
    this.studies = this.service.candidate.studies;
  }

  makeEditable() {
    this.service.isEditStudies = true;
  }

}
