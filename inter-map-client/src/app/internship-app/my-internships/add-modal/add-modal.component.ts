import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../../components/candidate-menu/candidate-menu.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompanyProfileService} from '../../profiles/company-profile/company-profile.service';
import {Internship} from '../../data/Internship';
import {InternshipDTO} from '../../data/InternshipDTO';
import {fromEvent, Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  form: FormGroup;
  // private bytesArray: string;
  private internship: InternshipDTO;

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
    const technology = formValue.technology;

    this.internship = new InternshipDTO(
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
      technology,
      '',
      null,
      5
    );

    const logo = formValue.file;
    if (logo != null) {
      this.fileProgress(logo);
    } else {
      this.service.addInternship(this.internship);
    }

  }

  fileProgress(fileInput: any) {
    console.log('in file processing');
    this.onUploadImage(fileInput.files[0]);
  }

  onUploadImage(fileData: File) {
    const fileReader = new FileReader();
    this.imageToBase64(fileReader, fileData)
      .subscribe(base64image => {
        console.log('in subscribe');

        this.internship.logo = base64image.split(',')[1];
        console.log(this.internship.logo);
        console.log(this.internship);
        console.log('save internship');
        this.service.addInternship(this.internship);
      });
  }

  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }
}
