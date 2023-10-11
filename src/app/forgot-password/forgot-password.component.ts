import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  formdata:any={};
  submit(){
  console.log("Submit");
  console.log(this.formdata);  
}
}
