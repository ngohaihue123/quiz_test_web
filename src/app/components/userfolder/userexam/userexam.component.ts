import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userexam',
  templateUrl: './userexam.component.html',
  styleUrls: ['./userexam.component.css']
})
export class UserexamComponent implements OnInit {

  constructor() { }
  result:any[]=[
    {id:1,value:2},
    {id:2,value:2},
    {id:3,value:2},
    {id:4,value:2},
    {id:5,value:2},
    {id:6,value:2},
    {id:7,value:2},
    {id:8,value:2},
    {id:9,value:2},
    {id:10,value:2},
    {id:11,value:2},
    {id:12,value:2},
    {id:13,value:2},
    {id:14,value:2},
    {id:15,value:2},
    {id:16,value:2},
    {id:17,value:2},
    {id:18,value:2},
    {id:19,value:2},
    {id:20,value:2},
    {id:21,value:2},
  ];
  changeActive1(item){
    item.show1="rb-tab-active";
    item.show2="";
    item.show3="";
    item.show4="";
  }
  changeActive2(item){
    item.show1="";
    item.show2="rb-tab-active";
    item.show3="";
    item.show4="";
  }
  changeActive3(item){
    item.show1="";
    item.show2="";
    item.show3="rb-tab-active";
    item.show4="";
  }
  changeActive4(item){
    item.show1="";
    item.show2="";
    item.show3="";
    item.show4="rb-tab-active";
  }
  minutes= 90;
  seconds=0;
  minutestr:string=this.minutes+"";
  secondstr:string="0"+this.seconds;
  startCountdown(){
    var interval = setInterval(() => {
      if(this.seconds==0){
        this.seconds=59;
        this.minutes--;
      }else{
        this.seconds--;
      }
      if(this.minutes<10){
        this.minutestr="0"+this.minutes;
      }else{
        this.minutestr=""+this.minutes;
      }
      if(this.seconds<10){
        this.secondstr="0"+this.seconds
      }else{
        this.secondstr=""+this.seconds;
      }
  
      if(this.minutes == 0&&this.seconds==0 ){
        
        // The code here will run when
        // the timer has reached zero.
        
        clearInterval(interval);
        console.log('Ding!');
        alert("Hết giờ")
      };
    }, 1000);
  };
  ngOnInit() {
  }

}
