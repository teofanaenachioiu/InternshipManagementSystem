import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddModalComponent} from '../../../my-internships/add-modal/add-modal.component';
import {CompanyProfileService} from '../company-profile.service';
import {Company} from '../../../../core/Company';
import {pluck} from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProfileComponent),
      multi: true,
    }
  ]
})
export class ProfileComponent implements ControlValueAccessor, OnDestroy, OnInit {
  private form: FormGroup;
  private subscriptions: Subscription[] = [];
  private company: Company;
  private bytesArray = null;

  private fileData: File = null;
  private previewUrl: any = 'assets/img/no-photo.png';

  get value(): ProfileComponent {
    return this.form.value;
  }

  set value(value: ProfileComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private service: CompanyProfileService) {

  }

  ngOnInit(): void {
    this.company = this.service.company;

    if (this.company.logo != null) {
      this.previewUrl = 'data:image/jpeg;base64,' + this.company.logo;
    }

    this.form = this.formBuilder.group({
      file: new FormControl({value: 'default'}, {validators: this.checkInputs}),
      name: new FormControl({value: 'default'}, {validators: this.checkInputs}),
      phone: new FormControl({value: 'default'}, {validators: this.checkInputs}),
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }

    if (obj === null) {
      this.form.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.form.valid ? null : {profile: {valid: false,},};
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  addInternshipHandler() {
    this.dialog.open(AddModalComponent, {
      data: {
        action: 'add'
      }
    });
  }

  submitForm() {
    let doUpdate = false;

    console.log(this.form.controls.name.value);
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    if (this.form.get('name').value != null || '') {
      this.service.company.name = this.form.get('name').value;
      doUpdate = true;
    }

    if (this.bytesArray != null) {
      this.service.company.logo = this.bytesArray;
      doUpdate = true;
    }

    if (this.form.get('phone').value != null || '') {
      this.service.company.telephone = this.form.get('phone').value;
      doUpdate = true;
    }

    if (doUpdate) {
      this.service.updateCompany();
    }

    this.service.isEditProfile = false;
  }


  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.onPreviewImage();
    this.onUploadImage();
  }

  onUploadImage() {
    const fileReader = new FileReader();
    this.imageToBase64(fileReader, this.fileData)
      .subscribe(base64image => {
        this.bytesArray = base64image.split(',')[1];
        // this.service.company.logo = onlyBytes;
        // console.log(onlyBytes);
      });
  }

  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }

  onPreviewImage() {
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
    };
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string, msg: string) => {
    return this.form.get(control).hasError(error) ? msg : '';
  };

  checkInputs(control: FormControl) {
    if (control.value === '') {
      return {emptyInput: true};
    }
    return null;
  }

}
