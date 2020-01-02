import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../../core/Candidat';
import {CandidateService} from '../../../candidate.service';

@Component({
  selector: 'app-personal-details-view',
  templateUrl: './personal-details-view.component.html',
  styleUrls: ['./personal-details-view.component.css']
})
export class PersonalDetailsViewComponent implements OnInit {
  private candidate: Candidat;
  private isEditMode: boolean;
  previewUrl: any = null;

  constructor( private service: CandidateService) {
  }
  ngOnInit(): void {
    this.isEditMode = false;
    this.candidate = this.service.candidate;
    this.previewUrl = 'https://image.flaticon.com/icons/png/512/21/21294.png';
  }

  makeEditable() {
    this.service.isEditPersonalDetails = true;
  }
}
