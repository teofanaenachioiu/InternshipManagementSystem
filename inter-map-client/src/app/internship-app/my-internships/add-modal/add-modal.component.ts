import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../../components/candidate-menu/candidate-menu.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyProfileService} from '../../profiles/company-profile/company-profile.service';
import {Internship} from '../../data/Internship';
import {InternshipDTO} from '../../data/InternshipDTO';

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
    const paid = !!formValue.paid;
    const startDate = formValue.fromDate;
    const endDate = formValue.toDate;
    const months = Math.trunc((endDate - startDate) / (1000 * 3600 * 24 * 30));
    const location = formValue.location;

    const internship = new InternshipDTO(
      '',
      name,
      startDate,
      endDate, paid,
      months,
      description,
      0,
      'Open',
      location,
      new Date(Date.now()),
      this.service.companyUsername,
      'da',
      3,
      'sad',
      5
    );

    console.log(internship);

    this.service.addInternship(internship);
  }
}
