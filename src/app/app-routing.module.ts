import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
