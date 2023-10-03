import { Component } from '@angular/core';

@Component({
  selector: 'app-prescription-reader',
  templateUrl: './prescription-reader.component.html',
  styleUrls: ['./prescription-reader.component.scss']
})
export class PrescriptionReaderComponent {
  fileUploaded = false;
  uploadedFilesList: File[] = [];

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
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
    }
  }
}
