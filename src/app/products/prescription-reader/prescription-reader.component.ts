import { Component } from '@angular/core';

@Component({
  selector: 'app-prescription-reader',
  templateUrl: './prescription-reader.component.html',
  styleUrls: ['./prescription-reader.component.scss']
})
export class PrescriptionReaderComponent {
  fileUploaded = false;
  uploadedFilesList: File[] = [];
  reseted=false;
  selectedImageSrc: string | null = null;

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }
  ResetUpload(){
    this. uploadedFilesList = [];
  this.selectedImageSrc = null;
  this.reseted = true;
  // this.uploadedFilesList=[];
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files) {
      this.uploadFiles(files);
    }
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    this.uploadFiles(files);
  }



  private uploadFiles(files: FileList | null): void {
    if (files && files.length > 0) {
      this.uploadedFilesList = Array.from(files);
      this.fileUploaded = true;

      // Display the first selected image (assuming it's an image file)
      const firstImage = this.uploadedFilesList.find((file) =>
        file.type.startsWith('image/')
      );
      if (firstImage) {
        this.displaySelectedImage(firstImage);
      }
    }
  }

  private displaySelectedImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.selectedImageSrc = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}
