import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsViewComponent } from './personal-details-view.component';

describe('PersonalDetailsViewComponent', () => {
  let component: PersonalDetailsViewComponent;
  let fixture: ComponentFixture<PersonalDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
