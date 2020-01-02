import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../../../components/candidate-menu/candidate-menu.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyProfileService} from '../company-profile.service';
import {Internship} from '../../../data/Internship';
import {InternshipDTO} from '../../../data/InternshipDTO';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private formBuilder: FormBuilder,
              private service: CompanyProfileService) {
    this.form = this.formBuilder.group({
      internshipForm: []
    });
  }

  ngOnInit() {
  }

  buttonHandler() {
    const formValue = this.form.value.internshipForm;
    const name = formValue.name;
    const description = formValue.description;
    // const status = formValue.status;
    const paid = formValue.paid;
    const startDate = formValue.fromDate;
    const endDate = formValue.toDate;
    const months = Math.trunc((endDate - startDate) / (1000 * 3600 * 24 * 30));
    const location = formValue.location;

    console.log(months);

    const internship = new InternshipDTO(
      '3',
      name,
      description,
      this.service.statuses[0],
      new Date(Date.now()),
      startDate,
      endDate,
      months,
      location,
      0,
      paid,
      'https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png',
      0,
      '',
      '1',
      this.service.companyUsername
    );

    this.service.addInternship(internship);
  }
}
