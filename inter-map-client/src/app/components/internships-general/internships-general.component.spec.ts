import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsGeneralComponent } from './internships-general.component';

describe('InternshipsGeneralComponent', () => {
  let component: InternshipsGeneralComponent;
  let fixture: ComponentFixture<InternshipsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
