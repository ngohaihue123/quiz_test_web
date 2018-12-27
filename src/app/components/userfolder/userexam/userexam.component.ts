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
<<<<<<< HEAD
  ngOnInit() {
    this.makeformResult(20);
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
=======
  result:any[]=[
    {id:1,value:0},
    {id:2,value:0},
    {id:3,value:0},
    {id:4,value:0},
    {id:5,value:0},
    {id:6,value:0},
    {id:7,value:0},
    {id:8,value:0},
    {id:9,value:0},
    {id:10,value:0},
    {id:11,value:0},
    {id:12,value:0},
    {id:13,value:0},
    {id:14,value:0},
    {id:15,value:0},
    {id:16,value:0},
    {id:17,value:0},
    {id:18,value:0},
    {id:19,value:0},
    {id:20,value:0},
    {id:21,value:0},
  ];
  changeActive1(item){
    item.show1="rb-tab-active";
    item.show2="";
    item.show3="";
    item.show4="";
    item.value= 1;
  }
  changeActive2(item){
    item.show1="";
    item.show2="rb-tab-active";
    item.show3="";
    item.show4="";
    item.value= 2;
  }
  changeActive3(item){
    item.show1="";
    item.show2="";
    item.show3="rb-tab-active";
    item.show4="";
    item.value= 3;
  }
  changeActive4(item){
    item.show1="";
    item.show2="";
    item.show3="";
    item.show4="rb-tab-active";
    item.value= 4;
>>>>>>> 8ec126161ed8bbf3e6ffa5f92aa05bb4ea60d5a3
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
<<<<<<< HEAD

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
=======
  printResult(){
    console.log(this.result);
  }
  ngOnInit() {
>>>>>>> 8ec126161ed8bbf3e6ffa5f92aa05bb4ea60d5a3
  }

}
