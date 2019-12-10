import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYouCandidateComponent } from './about-you-candidate.component';

describe('AboutYouCandidateComponent', () => {
  let component: AboutYouCandidateComponent;
  let fixture: ComponentFixture<AboutYouCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutYouCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYouCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
