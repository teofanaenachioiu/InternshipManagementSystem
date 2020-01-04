import {Component, OnInit} from '@angular/core';
import {InterestsService} from '../interests/interests.service';

@Component({
  selector: 'app-interests-view',
  templateUrl: './interests-view.component.html',
  styleUrls: ['./interests-view.component.css']
})
export class InterestsViewComponent implements OnInit {
  private interests: string[];
  constructor(private service: InterestsService) {
  }

  ngOnInit() {
    this.interests = this.service.interestsUser;
  }

  makeEditable() {
    this.service.isEditInterests = true;
  }
}
