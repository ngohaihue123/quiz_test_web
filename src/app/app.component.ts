import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth: boolean = false;
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var url = event.urlAfterRedirects.substr(1);
        this.isAuth = url == 'login' || url == 'register' || url == 'password/forgot';
      }
    });
  }
}
