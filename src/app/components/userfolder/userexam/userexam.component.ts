import { DateTimeHelper } from './../../../helpers/datetime-helper';
import { async } from '@angular/core/testing';
import { StudentTestService } from './../../../services/student_test.service';
import { TestService } from './../../../services/test.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentTest } from '../,,/../../../models/student_test.model'


@Component({
  selector: 'app-userexam',
  templateUrl: './userexam.component.html',
  styleUrls: ['./userexam.component.css']
})
export class UserexamComponent implements OnInit {
  displayResult: boolean = false;
  data: any;
  result = [];
  finalResult = [];
  minutes = 0;
  seconds = 0;
  test: any;
  minutestr: string;
  secondstr: string = "0" + this.seconds;
  studentTest = new StudentTest();
  constructor(
    private router: ActivatedRoute,
    private testService: TestService,
    private studentTestService: StudentTestService
  ) { }
  ngOnInit() {
    const testId = this.router.snapshot.paramMap.get('testId');
    this.testService.getTestById(testId).then(test => {
      if (test && test.success) {
        this.test = test.data;
        this.test.dateCreate = DateTimeHelper.formatDateTimeFromTimeUTC(this.test.dateCreate, "DD/MM/YYYY")
        this.makeformResult(test.data.numberQuestion);
        this.minutes = test.data.time;
        this.minutestr = test.data.time + ""
      }

    })


  }

  changeActive(item, value) {
    if (this.displayResult) return;
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
  }

  startCountdown() {
    var interval = setInterval(() => {
      if (this.seconds == 0) {
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      if (this.minutes < 10) {
        this.minutestr = "0" + this.minutes;
      } else {
        this.minutestr = "" + this.minutes;
      }
      if (this.seconds < 10) {
        this.secondstr = "0" + this.seconds
      } else {
        this.secondstr = "" + this.seconds;
      }

      if (this.minutes == 0 && this.seconds == 0) {

        // The code here will run when
        // the timer has reached zero.

        clearInterval(interval);
        console.log('Ding!');
        alert("Hết giờ")
      };
    }, 1000);
  };

  doTest() {
    this.startCountdown();

  }
  makeformResult(numberQuesttion) {
    for (let i = 1; i <= numberQuesttion; i++) {
      this.result.push({ id: i, value: 0 })
    }
  }

  submitTest() {
    this.finalResult = this.result.map(function (x) {
      return {
        id: x.id,
        value: x.value
      }
    })
    this.studentTest.answer = this.finalResult;
    this.studentTest.student = JSON.parse(localStorage.getItem('i')).idStudent;
    this.studentTest.test = this.test._id;
    this.studentTestService.add(this.studentTest).then(result => {
      this.data = result;
      this.showAnwser(result.data.studentAnswer, result.data.testAnswer);
      this.displayResult = true;
    })
  }


  showAnwser(stuentAnwsers, testAnswers) {
    this.result = testAnswers.map(function (x) {
      switch (x.value) {
        case 0:
          break;
        case 1:
          x.show1 = "rb-tab-active-2";
          break;
        case 2:
          x.show2 = "rb-tab-active-2";
          break;
        case 3:
          x.show3 = "rb-tab-active-2";
          break;
        case 4:
          x.show4 = "rb-tab-active-2";
          break;
      }
      return x;
    })
    let i;
    for (i = 0; i < this.result.length; i++) {
      console.log(stuentAnwsers[i].value);
      if (stuentAnwsers[i].value == 1) this.result[i].show1 = "rb-tab-active";
      if (stuentAnwsers[i].value == 2) this.result[i].show2 = "rb-tab-active";
      if (stuentAnwsers[i].value == 3) this.result[i].show3 = "rb-tab-active";
      if (stuentAnwsers[i].value == 4) this.result[i].show4 = "rb-tab-active";

    }
  }

}
