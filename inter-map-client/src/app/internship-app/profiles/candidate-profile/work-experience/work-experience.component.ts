import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CandidateProfileService} from '../candidate-profile.service';
import {Experience} from '../../../../core/Experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WorkExperienceComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => WorkExperienceComponent),
      multi: true,
    }
  ]
})
export class WorkExperienceComponent implements ControlValueAccessor, OnDestroy, OnInit {
  private experiences: Experience[];
  private form: FormGroup;
  private subscriptions: Subscription[] = [];

  get value(): WorkExperienceComponent {
    return this.form.value;
  }

  set value(value: WorkExperienceComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService) {
  }

  get workExperienceForms() {
    return this.form.get('workExperience') as FormArray;
  }

  addWork() {
    this.experiences.push(new Experience());
    const study = this.formBuilder.group({
      companyName: '',
      startDate: new Date(),
      endDate: new Date(),
      jobName: ''
    });
    this.workExperienceForms.push(study);
  }

  removeWork(i) {
    if (i >= 0) {
      this.experiences.splice(i, 1);
      this.workExperienceForms.removeAt(i);
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

  changeExperience(): Experience[] {
    const newExp = [];
    for (let i = 0; i < this.workExperienceForms.length; i++) {
      const exp = this.workExperienceForms.controls[i].value;
      Object.keys(exp).forEach(key => {
        if (exp[key] == null) {
          exp[key] = this.experiences[i][key];
        }
      });
      newExp.push(exp);
    }
    return newExp;
  }

  submitForm() {
    if (!this.workExperienceForms.valid) {
      return;
    }

    this.service.isEditWorkExperience = false;
    this.service.candidate.experiences = this.changeExperience();
    this.service.updateCandidate();
  }

  ngOnInit(): void {
    this.experiences = this.service.candidate.experiences;

    this.form = this.formBuilder.group({
      workExperience: this.formBuilder.array([])
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );

    // tslint:disable-next-line:forin
    for (const i in this.experiences) {
      const study = this.formBuilder.group({
        companyName: '',
        startDate: new Date(),
        endDate: new Date(),
        jobName: ''
      });
      this.workExperienceForms.push(study);
    }
  }

  // checkDates(group: FormGroup) {
  //   if (group.controls.endDate.value < group.controls.startDate.value) {
  //     return {notValid: true};
  //   }
  //   return null;
  // }
}
