import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanPartComponent } from './scan-part.component';

describe('ScanPartComponent', () => {
  let component: ScanPartComponent;
  let fixture: ComponentFixture<ScanPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
