import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceViewComponent } from './work-experience-view.component';

describe('WorkExperienceViewComponent', () => {
  let component: WorkExperienceViewComponent;
  let fixture: ComponentFixture<WorkExperienceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
