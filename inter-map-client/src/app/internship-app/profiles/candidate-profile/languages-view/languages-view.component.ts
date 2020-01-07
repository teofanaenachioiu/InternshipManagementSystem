import {Component, OnInit} from '@angular/core';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-languages-view',
  templateUrl: './languages-view.component.html',
  styleUrls: ['./languages-view.component.css']
})
export class LanguagesViewComponent implements OnInit {
  private languages: string[];

  constructor(private service: CandidateProfileService) {
  }

  ngOnInit() {
    this.languages = this.service.candidate.languages;
  }

  makeEditable() {
    this.service.isEditLanguage = true;
  }

}
