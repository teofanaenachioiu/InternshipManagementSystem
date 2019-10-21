import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCantidateComponent } from './register-cantidate.component';

describe('RegisterCantidateComponent', () => {
  let component: RegisterCantidateComponent;
  let fixture: ComponentFixture<RegisterCantidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCantidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCantidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
