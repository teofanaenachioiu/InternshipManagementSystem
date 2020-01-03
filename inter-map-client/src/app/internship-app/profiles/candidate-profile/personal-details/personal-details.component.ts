import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Candidat} from '../../../../core/Candidat';
import {CandidateService} from '../../../candidate.service';

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
  fileData: File = null;
  previewUrl: any = null;

  startDate: Date = null;

  get value(): PersonalDetailsComponent {
    return this.form.value;
  }

  set value(value: PersonalDetailsComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateService) {
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

  ngOnInit(): void {
    this.candidate = this.service.candidate;
    this.startDate = new Date(this.candidate.birthDate);
    this.previewUrl = 'https://image.flaticon.com/icons/png/512/21/21294.png';

    this.form = this.formBuilder.group({
      file: new FormControl({value: ''}, Validators.required),
      name: new FormControl({value: ''}, Validators.required),
      surname: new FormControl({value: ''}, Validators.required),
      dateOfBirth: new FormControl({value: new Date(2000, 0, 12), disabled: false},
        Validators.required),
      sex: new FormControl({value: ''})
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
      this.service.candidate.sex = this.form.get('sex').value;
      console.log('gender: ' + this.form.get('sex').value);
      doUpdate = true;
    }

    if (this.form.get('dateOfBirth').value != null || '') {
      this.service.candidate.birthDate = this.form.get('dateOfBirth').value.toString();
      console.log('dateOfBirth: ' + this.form.get('dateOfBirth').value);
      doUpdate = true;
    }

    if (doUpdate) {
      this.service.updateCandidate();
    }

    this.service.isEditPersonalDetails = false;
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
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

  // onSubmitPhoto() {
  //   const formData = new FormData();
  //   formData.append('file', this.fileData);
  //   this.http.post('url/to/your/api', formData)
  //     .subscribe(res => {
  //       console.log(res);
  //       this.uploadedFilePath = res.data.filePath;
  //       alert('SUCCESS !!');
  //     })
  // }
}
