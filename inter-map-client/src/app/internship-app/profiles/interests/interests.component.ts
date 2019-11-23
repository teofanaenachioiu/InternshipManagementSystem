import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipSelectionChange} from '@angular/material';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InterestsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InterestsComponent),
      multi: true,
    }
  ]
})
export class InterestsComponent implements ControlValueAccessor, OnDestroy {

  form: FormGroup;
  subscriptions: Subscription[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  suggestionList = ['Java', 'Kotlin', 'C', 'Angular'];

  get value(): InterestsComponent {
    return this.form.value;
  }

  set value(value: InterestsComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      interests: this.formBuilder.array([]),
      // suggestions: ['']
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

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const interests = this.form.get('interests') as FormArray;
      interests.push(this.formBuilder.control(value.trim()));
    }

    if (input) {
      input.value = '';
    }
  }

  remove(index: number): void {

    const interests = this.form.get('interests') as FormArray;

    if (index >= 0) {
      interests.removeAt(index);
    }
  }

  addSuggestion(suggestion) {
    const interests = this.form.get('interests') as FormArray;
    interests.push(this.formBuilder.control(suggestion));

    const index = this.suggestionList.indexOf(suggestion);

    if (index >= 0) {
      this.suggestionList.splice(index, 1);
    }
  }
}
