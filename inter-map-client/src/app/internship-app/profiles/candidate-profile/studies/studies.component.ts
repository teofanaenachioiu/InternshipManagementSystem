import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CandidateProfileService} from '../candidate-profile.service';
import {Studies} from '../../../../core/Studies';

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
export class StudiesComponent implements ControlValueAccessor, OnDestroy, OnInit {
  private studies: Studies[];
  private form: FormGroup;
  private subscriptions: Subscription[] = [];

  get value(): StudiesComponent {
    return this.form.value;
  }

  set value(value: StudiesComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService) {
  }

  get studiesForms() {
    return this.form.get('studies') as FormArray;
  }

  createStudyControl(): AbstractControl{
    return this.formBuilder.group({
      nameOfInstitution: new FormControl({value: ''}, ),
      profile: new FormControl({value: ''}, ),
      startDate: new FormControl({value: new Date()}, ),
      endDate: new FormControl({value: new Date()}, ),
      description: new FormControl({value: ''}),
    });
  }

  addStudy() {
    this.studies.push(new Studies());
    const control = this.createStudyControl();
    this.studiesForms.push(control);
  }

  removeStudy(i) {
    if (i >= 0) {
      this.studiesForms.removeAt(i);
      this.studies.splice(i, 1);
    }
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

  changeStudies(): Studies[] {
    const newStudies = [];
    for (let i = 0; i < this.studiesForms.length; i++) {
      const exp = this.studiesForms.controls[i].value;
      Object.keys(exp).forEach(key => {
        if (exp[key] == null) {
          exp[key] = this.studies[i][key];
        }
      });
      newStudies.push(exp);
    }
    return newStudies;
  }

  checkErrorsInForm(control: AbstractControl, error: string): boolean {
    return control.hasError(error);
  }

  submitForm() {
    if (!this.studiesForms.valid) {
      return;
    }

    this.service.isEditStudies = false;
    this.service.candidate.studies = this.changeStudies();
    this.service.updateCandidate();
  }

  ngOnInit() {
    this.studies = this.service.candidate.studies;

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

    // tslint:disable-next-line:forin
    for (const i in this.studies) {
      const control = this.createStudyControl();
      this.studiesForms.push(control);
    }
  }

  // checkDates(group: FormGroup) {
  //   if (group.controls.endDate.value < group.controls.startDate.value) {
  //     return {notValid: true};
  //   }
  //   return null;
  // }

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
