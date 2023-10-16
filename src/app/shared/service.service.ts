import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
Userdata:any;
  constructor(private http:HttpClient) { }
  getProfileUser(){
    return this.http.get("http://localhost:3000/profiledata");
  }
  setProfileUserData(data:any){
   return this.http.post("http://localhost:3000/profiledata",data);
  }
}
