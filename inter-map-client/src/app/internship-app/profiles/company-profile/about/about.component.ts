import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Company} from '../../../../core/Company';
import {CompanyProfileService} from '../company-profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AboutComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AboutComponent),
      multi: true,
    }
  ]
})
export class AboutComponent implements ControlValueAccessor, OnDestroy, OnInit {

  private form: FormGroup;
  private subscriptions: Subscription[] = [];
  private company: Company;

  get value(): AboutComponent {
    return this.form.value;
  }

  set value(value: AboutComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CompanyProfileService) {

  }

  ngOnInit(): void {
    this.company = this.service.company;

    this.form = this.formBuilder.group({
      address: new FormControl({value: 'default'}, {validators: this.checkInputs}),
      field: new FormControl({value: 'default'}, {validators: this.checkInputs}),
      description: new FormControl({value: 'default'}, ),
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

  submitForm() {
    let doUpdate = false;

    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    if (this.form.get('address').value != null || '') {
      this.service.company.address = this.form.get('address').value;
      doUpdate = true;
    }

    if (this.form.get('field').value != null || '') {
      this.service.company.field = this.form.get('field').value;
      doUpdate = true;
    }

    if (this.form.get('description').value != null || '') {
      this.service.company.description = this.form.get('description').value;
      doUpdate = true;
    }

    if (doUpdate) {
      this.service.updateCompany();
    }

    this.service.isEditAbout= false;
  }
}
