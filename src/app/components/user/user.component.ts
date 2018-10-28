import { User } from './../../models/user.model';  
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User= new User();


  constructor() { }

  ngOnInit() {
    this.user._id="1";
    this.user.username="ngohiahue96@gmail.com";
    this.user.password="ngohiahue";
  }

}
