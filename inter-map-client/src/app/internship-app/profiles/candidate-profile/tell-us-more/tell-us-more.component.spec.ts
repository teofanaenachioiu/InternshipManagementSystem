import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellUsMoreComponent } from './tell-us-more.component';

describe('TellUsMoreComponent', () => {
  let component: TellUsMoreComponent;
  let fixture: ComponentFixture<TellUsMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellUsMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellUsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
