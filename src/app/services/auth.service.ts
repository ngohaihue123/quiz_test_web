import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';

// import { Res } from 'app/models/res.model';

import { AppConfig } from "../configs/app.config";
import { AuthConfig } from '../configs/auth.config';

import { HttpService } from './http.service';

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService) { }

    login(username: string, password: string): Promise<boolean> {
        let data = JSON.stringify({ username: username, password: password, type: 'manager' });
        let url = AuthConfig.LoginUrl;
        return this.httpService.postwithcallback(url, data, (res) => {
            let user = res.json();
            if (!user) {
                return false;
            }
            localStorage.setItem('i', JSON.stringify(user));
            return true;
        });
    }

    logout(): void {
        localStorage.clear();
    }

    // resetPassword(username): Promise<Res> {
    //     let url = AuthConfig.ResetPasswordUrl + '?username=' + username;
    //     return this.httpService.getwithcallback(url, res => res.json());
    //   }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
