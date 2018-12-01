import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        var i = localStorage.getItem('i')
        if (i) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}