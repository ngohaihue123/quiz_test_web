import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


// 3rd

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    var user = localStorage.getItem('i');
    if (user != null) {
      this.router.navigate(["/category"]);
    }
  }

  login(): void {
    this.username="ngohaihue";
    this.password="ngohaihue";
    this.loading = true;
    this.authService.login(this.username, this.password)
      .then((success: boolean) => {
        
          this.loading = false;
          setTimeout(() => {
            if (success) {
              // toast("Login successfully!", 3000, 'toast-success');
              console.log("login successfully");
              this.router.navigate(["/dialogs", 1]);
            } else {
              // toast('Username or password is incorrect', 3000, 'toast-error');
              console.log("username or password is incorrect");
            }
          }, 1000);
        });

  }
}
