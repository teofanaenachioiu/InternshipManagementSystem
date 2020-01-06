import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddModalComponent} from '../add-modal/add-modal.component';
import {CompanyProfileService} from '../company-profile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProfileComponent),
      multi: true,
    }
  ]
})
export class ProfileComponent implements ControlValueAccessor, OnDestroy {

  form: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): ProfileComponent {
    return this.form.value;
  }

  set value(value: ProfileComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private service: CompanyProfileService) {
    this.form = this.formBuilder.group({
      name: '',
      phone: '',
      email: ''
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

  addInternshipHandler() {
    this.dialog.open(AddModalComponent, {
      data: {
        action: 'add'
      }
    });
  }

  submitForm() {
    let doUpdate = false;
    console.log(this.form.value);
    if (this.form.get('name').value != null || '') {
      this.service.company.name = this.form.get('name').value;
      doUpdate = true;
    }

    if (this.form.get('email').value != null || '') {
      this.service.company.email = this.form.get('email').value;
      doUpdate = true;
    }

    if (this.form.get('phone').value != null || '') {
      this.service.company.phone = this.form.get('phone').value;
      doUpdate = true;
    }

    if (doUpdate) {
      // this.service.updateCompany();
    }

    this.service.isEditProfile = false;
  }
}
