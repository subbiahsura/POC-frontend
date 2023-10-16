import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-completing-profile-dailog',
  templateUrl: './completing-profile-dailog.component.html',
  styleUrls: ['./completing-profile-dailog.component.scss']
})
export class CompletingProfileDailogComponent {
  profileForm:FormGroup;
  userdata:any;
  statenames=[
    "Andhra Pradesh - Amaravati (proposed)",
"Arunachal Pradesh - Itanagar",
"Assam - Dispur",
"Bihar - Patna",
"Chhattisgarh - Raipur",
"Goa - Panaji",
"Gujarat - Gandhinagar",
"Haryana - Chandigarh",
"Himachal Pradesh - Shimla",
"Jharkhand - Ranchi",
"Karnataka - Bangalore",
"Kerala - Thiruvananthapuram",
"Madhya Pradesh - Bhopal",
"Maharashtra - Mumbai",
"Manipur - Imphal",
"Meghalaya - Shillong",
"Mizoram - Aizawl",
"Nagaland - Kohima",
"Odisha - Bhubaneswar",
"Punjab - Chandigarh",
"Rajasthan - Jaipur",
"Sikkim - Gangtok",
"Tamil Nadu - Chennai",
"Telangana - Hyderabad",
"Tripura - Agartala",
"Uttar Pradesh - Lucknow",
"Uttarakhand - Dehradun",
"West Bengal - Kolkata"
  ];
bloodgroups=[
"A_positive A+",
"A_negative A-",
"B_positive B+",
"B_negative B-",
"O_positive O+",
"O_negative O-",
"AB_positive AB+",
"AB_negative AB-",
]

  genders=[
    "Male",
"Female",
"Non-binary",
"Transgender",
"Genderqueer",
"Genderfluid",
"Agender",
"Bigender",
"Androgynous",
"Cisgender"
  ]
  constructor(public dailogRef : MatDialogRef<CompletingProfileDailogComponent>,private service:ServiceService,private fb:FormBuilder){
    this.profileForm= this.fb.group({
      Dateofbirth:"",
      Bloodgroup:"",
      gender:"",
      PhoneNumber:"",
      address:"",
      State:"",
      District:"",
      city:"",
      pincode:"",
      height:"",
      weight:"",
    })
  }
  closeDailog(){
    this.dailogRef.close();
  }
  Submitform(){
    // console.log(this.profileForm.value.Dateofbirth);
    this.service.setProfileUserData(this.profileForm.value).subscribe(data=>{
      alert("Profile Updated")
    this.dailogRef.close(true);
    })

  }



}
