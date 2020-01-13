import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCandidateComponent } from './home-candidate.component';

describe('HomeCandidateComponent', () => {
  let component: HomeCandidateComponent;
  let fixture: ComponentFixture<HomeCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
