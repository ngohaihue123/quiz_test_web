import { AuthService } from '../../../services/auth.service'
import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
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
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value, "user").then(data => {
      this.loading = false;
      if (data) {
        this.router.navigate(["/user"]);
      } else {
        this.alertService.error("Mật khẩu Hay Email không đúng!")
      }
    })

  }
}
