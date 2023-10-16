import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CompletingProfileDailogComponent } from './completing-profile-dailog/completing-profile-dailog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserLoginRegisterProfileModule } from './user-login-register-profile/user-login-register-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    ProfileComponent,
    CompletingProfileDailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    UserLoginRegisterProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
