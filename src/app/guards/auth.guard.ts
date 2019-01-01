import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRoute } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private route: ActivatedRoute, ) { }
    canActivate() {
        var i = localStorage.getItem('i')
        if (i) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}