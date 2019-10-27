import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  selectedProfile: string;

  isLinear = true;
  private error = '';

  constructor() {
    this.selectedProfile = null;
  }

  ngOnInit() {
  }

  clickOnNext() {
    if (this.selectedProfile == null) {
      console.log('Select');
      this.error = 'Choose one option';
    } else {
      this.error = '';
      console.log(this.selectedProfile);
    }
  }

}
