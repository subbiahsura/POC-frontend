import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodReportAnalyserComponent } from './blood-report-analyser.component';

describe('BloodReportAnalyserComponent', () => {
  let component: BloodReportAnalyserComponent;
  let fixture: ComponentFixture<BloodReportAnalyserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodReportAnalyserComponent]
    });
    fixture = TestBed.createComponent(BloodReportAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
