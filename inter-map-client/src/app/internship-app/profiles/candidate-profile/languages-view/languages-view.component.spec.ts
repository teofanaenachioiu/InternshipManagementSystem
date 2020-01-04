import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesViewComponent } from './languages-view.component';

describe('LanguagesViewComponent', () => {
  let component: LanguagesViewComponent;
  let fixture: ComponentFixture<LanguagesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
