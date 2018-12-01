
import { AuthService } from '../../../services/auth.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MaterializeAction, toast } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})

export class LoginTeacherComponent implements OnInit {
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
      this.router.navigate(["/teacher/home"]);
    }
  }

  login(): void {
    this.username = "ngohaihue96";
    this.password = "ngohaihue";
    this.type = "teacher";
    this.loading = true;
    this.authService.login(this.username, this.password, this.type)
      .then((success: boolean) => {
        // this.sharedService.getLocalizations().then(() => {
        this.loading = false;
        setTimeout(() => {
          if (success) {
            console.log("Login successfully!", 3000, 'toast-success');
            this.router.navigate(["/teacher/home"]);
            // toast("Login successfully!", 3000, 'toast-success');
          } else {
            // toast('Username or password is incorrect', 3000, 'toast-error');
          }
        }, 1000);
      });
    // });
  }
}
