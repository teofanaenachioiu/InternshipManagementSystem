import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMenuComponent } from './candidate-menu.component';

describe('CandidateMenuComponent', () => {
  let component: CandidateMenuComponent;
  let fixture: ComponentFixture<CandidateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
