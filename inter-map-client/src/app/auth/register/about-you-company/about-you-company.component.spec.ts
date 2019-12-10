import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYouCompanyComponent } from './about-you-company.component';

describe('AboutYouCompanyComponent', () => {
  let component: AboutYouCompanyComponent;
  let fixture: ComponentFixture<AboutYouCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutYouCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYouCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
