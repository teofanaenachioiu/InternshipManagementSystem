import {Component, OnInit} from '@angular/core';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-tell-us-more-view',
  templateUrl: './tell-us-more-view.component.html',
  styleUrls: ['./tell-us-more-view.component.css']
})
export class TellUsMoreViewComponent implements OnInit {
  private description: string;

  constructor(private service: CandidateProfileService) {
  }

  ngOnInit() {
    this.description = this.service.candidate.description;
  }

  makeEditable() {
   this.service.isEditDescription = true;
  }

}
