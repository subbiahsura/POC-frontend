import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrescriptionReaderComponent } from './prescription-reader/prescription-reader.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
