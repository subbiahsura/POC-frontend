import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrescriptionReaderComponent } from './prescription-reader/prescription-reader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    LoginComponent,
    RegisterComponent,
    PrescriptionReaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
