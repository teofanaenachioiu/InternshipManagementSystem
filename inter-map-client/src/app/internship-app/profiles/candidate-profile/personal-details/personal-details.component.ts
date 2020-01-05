import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {Candidat} from '../../../../core/Candidat';
import {CandidateProfileService} from '../candidate-profile.service';
import {Sex} from '../../../../core/Sex';
import {DomSanitizer} from '@angular/platform-browser';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalDetailsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonalDetailsComponent),
      multi: true,
    }
  ]
})
export class PersonalDetailsComponent implements ControlValueAccessor, OnDestroy, OnInit {
  private form: FormGroup;
  private subscriptions: Subscription[] = [];
  private candidate: Candidat;
  private fileData: File = null;
  private previewUrl: any = 'assets/img/no-photo.png';

  startDate: Date = null;
  gender: any = '0';

  get value(): PersonalDetailsComponent {
    return this.form.value;
  }

  set value(value: PersonalDetailsComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService, private sanitizer: DomSanitizer) {
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

  initializeFormInputs() {
    this.candidate = this.service.candidate;
    this.startDate = new Date(this.candidate.birthDate);
    this.gender = Sex[this.candidate.sex];

    if (this.candidate.avatar != null) {
      this.previewUrl = 'data:image/jpeg;base64,' + this.candidate.avatar;
    }
  }

  ngOnInit(): void {
    this.initializeFormInputs();

    this.form = this.formBuilder.group({
      file: new FormControl({value: ''}, Validators.required),
      name: new FormControl({value: ''}, Validators.required),
      surname: new FormControl({value: ''}, Validators.required),
      dateOfBirth: new FormControl({value: new Date(2000, 0, 12), disabled: false},
        [Validators.required]),
      sex: new FormControl({value: 0})
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  submitForm() {
    let doUpdate = false;

    console.log(this.form.value);
    if (this.form.get('name').value != null || '') {
      this.service.candidate.firstName = this.form.get('name').value;
      doUpdate = true;
    }

    if (this.form.get('surname').value != null || '') {
      this.service.candidate.lastName = this.form.get('surname').value;
      doUpdate = true;
    }

    if (this.form.get('sex').value != null || '') {
      console.log(typeof (this.form.get('sex').value));
      this.service.candidate.sex = this.form.get('sex').value;
      doUpdate = true;
    }

    if (this.form.get('dateOfBirth').value != null || '') {
      this.service.candidate.birthDate = this.form.get('dateOfBirth').value.toString();
      doUpdate = true;
    }

    if (doUpdate) {
      console.log('do update');
      this.service.updateCandidate();
    }

    this.service.isEditPersonalDetails = false;
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
        const onlyBytes = base64image.split(',')[1];
        this.service.candidate.avatar = onlyBytes;
        console.log(onlyBytes);
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
    return this.form.controls[control].hasError(error) ? msg : '';
  };

}
