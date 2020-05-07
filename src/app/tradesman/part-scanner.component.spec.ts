import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartScannerComponent } from './part-scanner.component';

describe('PartScannerComponent', () => {
  let component: PartScannerComponent;
  let fixture: ComponentFixture<PartScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
