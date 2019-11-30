import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordsComponent } from './key-words.component';

describe('KeyWordsComponent', () => {
  let component: KeyWordsComponent;
  let fixture: ComponentFixture<KeyWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
