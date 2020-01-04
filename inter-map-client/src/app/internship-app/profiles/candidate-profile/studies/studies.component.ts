import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StudiesComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StudiesComponent),
      multi: true,
    }
  ]
})
export class StudiesComponent implements ControlValueAccessor, OnDestroy {

  form: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): StudiesComponent {
    return this.form.value;
  }

  set value(value: StudiesComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService) {
    this.form = this.formBuilder.group({
      studies: this.formBuilder.array([])
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );

  }

  get studiesForms() {
    return this.form.get('studies') as FormArray;
  }

  addStudy() {
    const study = this.formBuilder.group({
      nameOfInstitution: '',
      profile: '',
      fromDate: new Date(),
      toDate: new Date(),
      more: ''
    });
    this.studiesForms.push(study);
    console.log(this.studiesForms.controls);
  }

  removeStudy(i) {
    if (i >= 0) {
      this.studiesForms.removeAt(i);
    }
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

  submitForm() {
    this.service.isEditStudies = false;
  }
}
