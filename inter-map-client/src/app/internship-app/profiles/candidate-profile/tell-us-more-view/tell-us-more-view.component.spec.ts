import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellUsMoreViewComponent } from './tell-us-more-view.component';

describe('TellUsMoreViewComponent', () => {
  let component: TellUsMoreViewComponent;
  let fixture: ComponentFixture<TellUsMoreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellUsMoreViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellUsMoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
