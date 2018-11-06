import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {

  public username: string;
  public token: string;

  constructor(private http: Http, private router: Router, private errorHandler: ErrorHandler) { }

  createAuthorizationHeader(headers: Headers) {
    var currentUser = localStorage.getItem('i');
    if (currentUser != null) {
      let token = JSON.parse(currentUser).accessToken;
      headers.append('Authorization', token);
    }
  }

  getwithcallback(url, callback): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.createAuthorizationHeader(headers);
    return this.http.get(url, { headers: headers })
      .toPromise().then(res => {
        return callback(res);
      }, err => {
        let error = err.json();
        this.errorHandler.handleError(error);
        return Promise.reject(error.message);
      }).catch(this.handleError);
  }

  postwithcallback(url, criteria, callback) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.createAuthorizationHeader(headers);
    return this.http.post(url, criteria, { headers: headers })
      .toPromise()
      .then(res => {
        return callback(res);
      }, err => {
        let error = err.json();
        this.errorHandler.handleError(error);
        return Promise.reject(error.message);
      });
  }

  uploadwithcallback(url: string, formData: FormData, callback) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options)
      .toPromise()
      .then(res => {
        return callback(res);
      }, err => {
        console.log(err);
      });
  }

  downloadwithcallback(url: string, callback) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .toPromise()
      .then(res => {
        return callback(res);
      }, err => {
        console.log(err);
      });
  }

  get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let headers = this.generateHeader();
      this.http.get(url, { headers: headers }).toPromise()
        .then(res => resolve(<T><any>res.json()))
        .catch(err => reject(err));
    });
  }

  post<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let headers = this.generateHeader();
      this.http.post(url, body, { headers: headers }).toPromise()
        .then(res => resolve(<T><any>res.json()))
        .catch(err => reject(err));
    });
  }

  put<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let headers = this.generateHeader();
      this.http.put(url, body, { headers: headers }).toPromise()
        .then(res => resolve(<T><any>res.json()))
        .catch(err => reject(err));
    });
  }

  delete<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      let headers = this.generateHeader();
      this.http.delete(url, { headers: headers }).toPromise()
        .then(res => resolve(<T><any>res.json()))
        .catch(err => reject(err));
    });
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  private generateHeader() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.createAuthorizationHeader(headers);
    return headers;
  }
}