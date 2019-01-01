import { AlertService } from './../../../services/alert.service';
import { AuthService } from '../../../services/auth.service'
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})

export class LoginTeacherComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authenticationService.logout();

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value, "Teacher").then(data => {
      this.loading = false;
      if (data) {
        this.router.navigate(["/teacher/tests/"]);
      } else {
        this.alertService.error("Mật khẩu Hay Email không đúng!")
      }
    })

  }
}
