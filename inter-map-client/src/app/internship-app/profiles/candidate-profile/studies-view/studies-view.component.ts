import { Component, OnInit } from '@angular/core';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-studies-view',
  templateUrl: './studies-view.component.html',
  styleUrls: ['./studies-view.component.css']
})
export class StudiesViewComponent implements OnInit {

  constructor(private service: CandidateProfileService) { }

  ngOnInit() {
  }

  makeEditable() {
    this.service.isEditStudies = true;
  }

}
