import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
// import { HomeService } from '../../../services/home.service';
// import {AuthService }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private authService: AuthService

  ) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
