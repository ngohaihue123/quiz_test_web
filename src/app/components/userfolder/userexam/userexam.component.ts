import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userexam',
  templateUrl: './userexam.component.html',
  styleUrls: ['./userexam.component.css']
})
export class UserexamComponent implements OnInit {
  result = [];
  finalResult = [];
  minutes = 90;
  seconds = 0;
  minutestr: string = this.minutes + "";
  secondstr: string = "0" + this.seconds;
  constructor() { }
  ngOnInit() {
    this.makeformResult(40);
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
  }

}
