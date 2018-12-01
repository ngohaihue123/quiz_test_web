// import { AuthService } from 'app/services/auth.service';
// import { AuthService } from '../../services/auth.service';
import { AuthService } from '../../../services/auth.service'

// import { AuthService } from '../services/auth.service';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthService } from '../services/auth.service';
// import {AuthService}
// import { SharedService } from 'app/services/shared.service';

// 3rd
// import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  type: string;
  errorMessage: string;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,

  ) {
  }

  ngOnInit() {
    var provider = localStorage.getItem('i');
    if (provider != null) {
      this.router.navigate(["/user"]);
    }
  }

  login(): void {
    this.username = "ngohaihue96";
    this.password = "ngohaihue";
    this.type = "user";
    this.loading = true;
    this.authService.login(this.username, this.password, this.type)
      .then((success: boolean) => {
        this.loading = false;
        setTimeout(() => {
          if (success) {
            // toast("Login successfully!", 3000, 'toast-success');
            this.router.navigate(["/user"]);
          } else {
            // toast('Username or password is incorrect', 3000, 'toast-error');
          }
        }, 1000);
      });
  }
}
