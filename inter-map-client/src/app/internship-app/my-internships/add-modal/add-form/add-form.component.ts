import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {CompanyProfileService} from '../../../profiles/company-profile/company-profile.service';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddFormComponent),
      multi: true,
    }
  ]
})
export class AddFormComponent implements ControlValueAccessor, OnDestroy {

  form: FormGroup;
  subscriptions: Subscription[] = [];
  private bytesArray: string;
  private fileData: File;

  get value(): AddFormComponent {
    return this.form.value;
  }

  set value(value: AddFormComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder,
              private companyService: CompanyProfileService) {
    this.form = this.formBuilder.group({
      bytesArray: '',
      name: '',
      description: '',
      paid: '',
      fromDate: '',
      toDate: '',
      status: 'Open',
      location: '',
      technology: ''
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  onChange: any = () => {};
  onTouched: any = () => {};

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
    return this.form.valid ? null : { profile: { valid: false, }, };
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
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
}
