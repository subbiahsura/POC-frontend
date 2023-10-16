import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formdata:any={};
  // email:any="";
  // password:any="";
submit(){
  console.log("Forms submitted!");
  console.log(this.formdata);
}
}
