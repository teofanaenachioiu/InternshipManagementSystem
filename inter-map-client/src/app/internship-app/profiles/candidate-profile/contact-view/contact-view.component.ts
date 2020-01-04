import {Component, OnInit} from '@angular/core';
import {CandidateProfileService} from '../candidate-profile.service';
import {Candidat} from '../../../../core/Candidat';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  private candidate: Candidat;
  constructor(private service: CandidateProfileService) {
  }

  ngOnInit() {
    this.candidate = this.service.candidate;
  }

  makeEditable() {
    this.service.isEditContact = true;
  }
}
