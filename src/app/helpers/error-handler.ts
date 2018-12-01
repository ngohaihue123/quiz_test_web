import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { MaterializeAction, toast } from 'angular2-materialize';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CommonErrorHandler implements ErrorHandler {

  private router: Router;
  private authService: AuthService;
  constructor(private injector: Injector) {
  }

  handleError(error) {
    if (error.status == 403 || error.status == 400) {
      setTimeout(() => {
        this.authService = this.injector.get(AuthService);
        this.router = this.injector.get(Router);
        this.authService.logout();
        setTimeout(() => {
          this.router.navigate(["/login"]);
        })
      });

    }
  }
}