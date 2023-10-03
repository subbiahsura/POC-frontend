import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
