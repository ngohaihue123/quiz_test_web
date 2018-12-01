import { FileService } from './../../../services/file.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  file: File = null;
  constructor(
    private fileService: FileService) {

    // this.provider._id =
  }

  ngOnInit() {
  }
  fileChangeGallery(event) {
    const _URL = window.URL;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      // const image = this.element.nativeElement.querySelector('.preview-image');
      // Validate upload file
      // const img = new Image();
      // img.onload = () => {
      //   image.src = img.src;
      // };
      // img.src = _URL.createObjectURL(this.file);
    }

  }
  uploadFile() {
    let formData: FormData = null;
    if (this.file != null) {
      formData = new FormData();
      formData.append('uploadFile', this.file, this.file.name);
    }

    return this.fileService.uploadFile(formData, 'bg')
      .then(res => {
        const success = res['success'];
        if (!success) {
          // toast('Oops, failed.', 3000, 'toast-error');
        }
        return res;
      });

  }


}
