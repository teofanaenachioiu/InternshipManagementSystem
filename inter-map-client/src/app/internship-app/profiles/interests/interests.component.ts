import {Component, ElementRef, forwardRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {startWith, map} from 'rxjs/operators';
import {InterestsService} from './interests.service';

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
export class InterestsComponent implements ControlValueAccessor, OnDestroy, OnInit {
  private form: FormGroup;
  private subscriptions: Subscription[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredFruits: Observable<string[]>;
  fruits: string[];
  allFruits: string[];
  allFruitsSuggested: string[];

  @ViewChild('interestInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  get value(): InterestsComponent {
    return this.form.value;
  }

  set value(value: InterestsComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: InterestsService) {
    this.form = this.formBuilder.group({
      fruitCtrl: new FormControl()
    });

    this.subscriptions.push(
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

  validate(_: FormControl) {
    return this.form.valid ? null : {profile: {valid: false,},};
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.allFruits = this.service.interests;
    this.fruits = this.service.interestsUser;
    this.allFruitsSuggested = this.service.interests.slice(0, 3);

    this.filteredFruits = this.form.controls.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim() && !this.fruits.find(x => x.toLowerCase() === value.toLowerCase())) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.form.controls.fruitCtrl.setValue(this.fruits);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const interest = event.option.viewValue;
    if (!this.fruits.find(x => x.toLowerCase() === interest.toLowerCase())) {
      this.fruits.push(interest);
    }
    this.fruitInput.nativeElement.value = '';
    this.form.controls.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(keyWord => keyWord.toLowerCase().indexOf(filterValue) === 0);

  }

  removeSuggestion(suggestion: string) {
    const index = this.allFruitsSuggested.indexOf(suggestion);

    if (index >= 0) {
      this.allFruitsSuggested.splice(index, 1);
    }

    // Add our fruit
    if ((suggestion || '').trim() && !this.fruits.find(x => x.toLowerCase() === suggestion.toLowerCase())) {
      this.fruits.push(suggestion.trim());
    }

    this.form.controls.fruitCtrl.setValue(null);
  }

  submitForm() {
    this.service.updateInterests(this.fruits);
    this.service.isEditInterests = false;
  }

  addInterest() {
    const value = this.form.controls.fruitCtrl.value;
    if ((value || '').trim() && !this.fruits.find(x => x.toLowerCase() === value.toLowerCase())) {
      this.fruits.push(value.trim());
    }
    this.form.controls.fruitCtrl.setValue(null);
  }
}
