import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesViewComponent } from './studies-view.component';

describe('StudiesViewComponent', () => {
  let component: StudiesViewComponent;
  let fixture: ComponentFixture<StudiesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
