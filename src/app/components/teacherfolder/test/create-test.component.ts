import { ActivatedRoute } from '@angular/router';
import { Test } from './../../../models/test.model';
import { TestService } from './../../../services/test.service';
import { FileService } from './../../../services/file.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  result = [];
  file: File = null;
  test: Test = new Test();
  formData: FormData = null;
  isFileChanged: boolean = false;
  constructor(private fileService: FileService, private testService: TestService, private activaticeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let testId = this.activaticeRoute.snapshot.params.id;
    if (testId) {
      this.testService.getTestById(testId).then(res => {
        this.test = res['data'];
        this.showAnwser(this.test.answer);
      })

    }


  }

  uploadFile(event) {

    const _URL = window.URL;
    this.file = event.target.files[0];
    this.isFileChanged = true;
  }

  save() {
    if (!this.test._id) {
      this.getFile();
      this.fileService.uploadFile(this.formData, 'bg')
        .then(res => {
          this.test.class = 10;
          this.test.title = "Kiem tra thu";
          // numberquesttion// 
          this.test.fileTest = res.data;
          this.test.answer = this.getResult(this.result);
          this.testService.add(this.test).then(res => {
            console.log(res);
          })
        });
    } else {
      this.test.title = "thay đổi";
      this.test.answer = this.getResult(this.result);
      if (this.isFileChanged) {
        this.getFile();
        this.fileService.uploadFile(this.formData, 'bg').then(res => {
          this.test.fileTest = res.data;
          this.testService.update(this.test).then(res => {
          })
        })
      } else {
        this.testService.update(this.test).then(res => {

        })
      }

    }
  }

  getFile() {
    if (this.file != null) {
      this.formData = new FormData();
      this.formData.append('uploadFile', this.file, this.file.name);
    }
  }
  showAnwser(anwsers) {
    this.result = anwsers.map(function (x) {
      switch (x.value) {
        case 0:
          break;
        case 1:
          x.show1 = "rb-tab-active";
          break;
        case 2:
          x.show2 = "rb-tab-active";
          break;
        case 3:
          x.show3 = "rb-tab-active";
          break;
        case 4:
          x.show4 = "rb-tab-active";
          break;
      }
      return x;
    })

  }

  changeActive(item, value) {
    item.show1 = "";
    item.show2 = "";
    item.show3 = "";
    item.show4 = "";
    switch (value) {
      case 1:
        item.show1 = "rb-tab-active";
        break;
      case 2:
        item.show2 = "rb-tab-active";
        break;
      case 3:
        item.show3 = "rb-tab-active";
        break;
      case 4:
        item.show4 = "rb-tab-active";
        break;
    }
    let tempAnwser = this.result.find(x => x.id == item.id);
    if (tempAnwser) tempAnwser.value = value;
    console.log(this.result);
  }
  makeformResult(numberQuesttion) {
    for (let i = 1; i <= numberQuesttion; i++) {
      this.result.push({ id: i, value: 0 })
    }
  }
  getResult(tempResult) {
    return tempResult.map(function (x) {
      return {
        id: x.id,
        value: x.value
      }
    })
  }

}
