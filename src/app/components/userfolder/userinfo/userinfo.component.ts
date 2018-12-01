import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  a1 = "active";
  a2;
  a3;
  triggerActive1(){
    this.a1="active";
    this.a2="";
    this.a3="";
  }
  triggerActive2(){
    this.a1="";
    this.a2="active";
    this.a3="";
  }
  triggerActive3(){
    this.a1="";
    this.a2="";
    this.a3="active";
  }
  constructor() { }

  ngOnInit() {
  }

}
