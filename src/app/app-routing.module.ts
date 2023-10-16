import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './user-login-register-profile/login/login.component';
import { ForgotPasswordComponent } from './user-login-register-profile/forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { BloodReportAnalyserComponent } from './products/blood-report-analyser/blood-report-analyser.component';
import { PrescriptionReaderComponent } from './products/prescription-reader/prescription-reader.component';
import { RegisterComponent } from './user-login-register-profile/register/register.component';
import { ResetPasswordComponent } from './user-login-register-profile/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full", // Use "full" to ensure a complete match
    redirectTo: "/Home", // Assuming "home" is the route you want to redirect to
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"Donate",
    component:DonateComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"Register",
    component:RegisterComponent
  },
  {
    path:"PrescriptionReader",
    component:PrescriptionReaderComponent
  },
  {
    path:"Forgot-password",
    component:ForgotPasswordComponent
  },
  {
    path:"Reset-password",
    component:ResetPasswordComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"bloodreportanalyser",
    component:BloodReportAnalyserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
