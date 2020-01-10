import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInternshipsComponent } from './my-internships.component';

describe('MyInternshipsComponent', () => {
  let component: MyInternshipsComponent;
  let fixture: ComponentFixture<MyInternshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInternshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
