import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipCandidatesComponent } from './internship-candidates.component';

describe('InternshipCandidatesComponent', () => {
  let component: InternshipCandidatesComponent;
  let fixture: ComponentFixture<InternshipCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
