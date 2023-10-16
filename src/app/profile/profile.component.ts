import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CompletingProfileDailogComponent } from '../completing-profile-dailog/completing-profile-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { CompletingProfileDailogComponent } from '../completing-profile-dailog/completing-profile-dailog.component';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  selectedFile: File | null = null;
  imageUrl: string | null = null; // To store the image URL
  userdata:any;

  constructor(private http: HttpClient,public dialog: MatDialog,private service:ServiceService) {
    this.getUserRecords();
  }
  ngOnInit(){
    if(this.dialog){
      this.getUserRecords();
    }
  }
  getUserRecords(){
  this.service.getProfileUser().subscribe(data=>{
    this.userdata=data;
    console.log(this.userdata)
    });

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadFile();
  }

  uploadFile() {
    if (this.selectedFile) {
      // Perform client-side validation (if needed) here
      if (!this.isValidFileType(this.selectedFile.type)) {
        alert('Invalid file type. Please select a JPG or PNG image.');
        return;
      }

      // You can now save the file locally or upload it to your server using HttpClient
      // For local saving, you can use the FileReader API
      const reader = new FileReader();
      reader.onload = () => {
        // You can use reader.result to access the file content
        // For example, save it to local storage and display it
        localStorage.setItem('userImage', reader.result as string);
        this.imageUrl = reader.result as string; // Set the image URL to display it
        alert('profile picture Uploaded succesfully');
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      alert('Please select a file before uploading.');
    }
  }

  isValidFileType(fileType: string) {
    // Check if the file type is one of the allowed image types
    return fileType === 'image/jpeg' || fileType === 'image/png';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompletingProfileDailogComponent);

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.getUserRecords();
      }
    });
  }
}

