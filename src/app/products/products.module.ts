import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodReportAnalyserComponent } from './blood-report-analyser/blood-report-analyser.component';
import { PrescriptionReaderComponent } from './prescription-reader/prescription-reader.component';



@NgModule({
  declarations: [
    BloodReportAnalyserComponent,
    PrescriptionReaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
