import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsPutsComponent } from './calls-puts.component';

describe('CallsPutsComponent', () => {
  let component: CallsPutsComponent;
  let fixture: ComponentFixture<CallsPutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsPutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsPutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
