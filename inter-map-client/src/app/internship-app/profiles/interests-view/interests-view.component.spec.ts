import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsViewComponent } from './interests-view.component';

describe('InterestsViewComponent', () => {
  let component: InterestsViewComponent;
  let fixture: ComponentFixture<InterestsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
