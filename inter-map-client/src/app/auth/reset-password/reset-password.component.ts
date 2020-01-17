import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Role} from '../../core/Role';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  private password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  private hidePassword = true;
  private routeSub: Subscription;
  private emailHash = '';

  constructor(private authService: AuthService, private activedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.routeSub = this.activedRoute.params.subscribe(params => {
      this.emailHash = params['email'];
      console.log(this.emailHash);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  isFormInvalid() {
    return this.password.hasError('required') ||
      this.password.hasError('minLength');
  }

  resetPassword() {
    console.log(this.password.value);

    // stop here if form is invalid
    if (this.isFormInvalid()) {
      return;
    }

    this.authService.resetPassword(this.emailHash, this.password.value)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/auth/login']);
      }, (error) => {
        alert(error);
      });

  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minlength') ? 'Not a valid password' : '';
  }
}
