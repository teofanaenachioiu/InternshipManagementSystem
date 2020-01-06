import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LanguagesComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LanguagesComponent),
      multi: true,
    }
  ]
})
export class LanguagesComponent implements ControlValueAccessor, OnDestroy, OnInit {

  form: FormGroup;
  languageList = ['English', 'France'];
  subscriptions: Subscription[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  addOnBlur = true;

  selectable = true;
  removable = true;

  get value(): LanguagesComponent {
    return this.form.value;
  }

  set value(value: LanguagesComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService) {
    this.form = this.formBuilder.group({
      newLanguage: ''
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

  remove(language: string): void {
    const index = this.languageList.indexOf(language);

    if (index >= 0) {
      this.languageList.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim() && !this.languageList.find(x => x.toLowerCase() === value.toLowerCase())) {
      this.languageList.push(value.trim());
    }
    this.form.controls.newLanguage.setValue(null);

    if (input) {
      input.value = '';
    }
  }

  addLanguage() {
    const value = this.form.controls.newLanguage.value;
    if ((value || '').trim() && !this.languageList.find(x => x.toLowerCase() === value.toLowerCase())) {
      this.languageList.push(value.trim());
    }
    this.form.controls.newLanguage.setValue(null);
  }

  submitForm() {
    this.service.updateCandidate();
    this.service.isEditLanguage = false;
  }
}
