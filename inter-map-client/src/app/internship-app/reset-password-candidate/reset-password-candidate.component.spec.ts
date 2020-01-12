import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordCandidateComponent } from './reset-password-candidate.component';

describe('ResetPasswordCandidateComponent', () => {
  let component: ResetPasswordCandidateComponent;
  let fixture: ComponentFixture<ResetPasswordCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
