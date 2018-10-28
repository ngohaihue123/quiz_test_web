
import { Http, RequestOptions, Headers } from '@angular/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router}  from '@angular/router'
export class HttpService{
    public username: string;
    public token: string;
    constructor(private http: Http, private router: Router, private errorHandler: ErrorHandler){}
    createAuthorizationHeader(headers: Headers){
        let currentUser= localStorage.getItem('i');
        if(currentUser !=null){
            let token= JSON.parse(currentUser).accessToken;
            headers.append("Authorization", token);
        }
    }
    put<T>(url: string, body: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
          let headers = this.generateHeader();
          this.http.put(url, body, { headers: headers }).toPromise()
            .then(res => resolve(<T><any>res.json()))
            .catch(err => reject(err));
        });
      }
    
      generateHeader(){
        let header= new Headers({'Content-type': 'application/json'});
        this.createAuthorizationHeader(header);
        return header;
    }
}