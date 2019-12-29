import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../../../components/candidate-menu/candidate-menu.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyProfileService} from '../company-profile.service';
import {InternshipDTO} from '../../../data/InternshipDTO';

interface MyDialogData extends DialogData {
  internship: InternshipDTO;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  form: FormGroup;
  internship: InternshipDTO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private formBuilder: FormBuilder,
              private service: CompanyProfileService) {
    this.form = this.formBuilder.group({
      internshipForm: []
    });
    console.log(data);
    this.internship = (data as MyDialogData).internship;
  }

  ngOnInit() {
  }

  buttonHandler() {
    const formValue = this.form.value.internshipForm;

    this.internship.status = formValue.status;
    this.service.updateInternship(this.internship);
  }

}
