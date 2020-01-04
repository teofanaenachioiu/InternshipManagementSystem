import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-tell-us-more',
  templateUrl: './tell-us-more.component.html',
  styleUrls: ['./tell-us-more.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TellUsMoreComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TellUsMoreComponent),
      multi: true,
    }
  ]
})
export class TellUsMoreComponent implements ControlValueAccessor, OnDestroy, OnInit {

  form: FormGroup;
  subscriptions: Subscription[] = [];
  private description: string;

  get value(): TellUsMoreComponent {
    return this.form.value;
  }

  set value(value: TellUsMoreComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService) {
    this.form = this.formBuilder.group({
      description: ''
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

  submitForm() {
    this.service.candidate.description = this.form.controls.description.value;
    this.service.updateCandidate();
    this.service.isEditDescription = false;
  }

  ngOnInit(): void {
    this.description = this.service.candidate.description;
  }
}
