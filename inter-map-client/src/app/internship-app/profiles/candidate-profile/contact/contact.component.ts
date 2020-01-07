import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Candidat} from '../../../../core/Candidat';
import {CandidateProfileService} from '../candidate-profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContactComponent),
      multi: true,
    }
  ]
})
export class ContactComponent implements ControlValueAccessor, OnDestroy, OnInit {
  private candidate: Candidat;
  form: FormGroup;
  subscriptions: Subscription[] = [];


  get value(): ContactComponent {
    return this.form.value;
  }

  set value(value: ContactComponent) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder, private service: CandidateProfileService) {
    this.form = this.formBuilder.group({
      address: new FormControl('', ),
      phone: new FormControl('', {validators: this.checkInputs}),
      email: new FormControl({value: '', disabled: true}, {validators: this.checkInputs}),
      linkedIn: new FormControl('', ),
      github: new FormControl('', {validators: this.checkInputs}),
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

  ngOnInit(): void {
    this.candidate = this.service.candidate;
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    let doUpdate = false;

    console.log(this.form.value);
    if (this.form.get('address').value != null || '') {
      this.service.candidate.address = this.form.get('address').value;
      doUpdate = true;
    }

    if (this.form.get('phone').value != null || '') {
      this.service.candidate.telephone = this.form.get('phone').value;
      doUpdate = true;
    }

    if (this.form.get('linkedIn').value != null || '') {
      this.service.candidate.linkLinkedin = this.form.get('linkedIn').value;
      doUpdate = true;
    }

    if (this.form.get('github').value != null || '') {
      this.service.candidate.linkGithub = this.form.get('github').value.toString();
      doUpdate = true;
    }

    if (doUpdate) {
      console.log('do update');
      this.service.updateCandidate();
    }
    this.service.isEditContact = false;
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
}
