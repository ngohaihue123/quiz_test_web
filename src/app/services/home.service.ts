import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ManagementConfig } from '../configs/management.config';
import { reject } from 'q';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpService) { }
  getAllTest() {
    let url = ManagementConfig.GetAllTestUrl;
    return new Promise((resolve, reject)=>{
      this.httpService.get(url).then(data =>{
        resolve(data);
      }).catch((err)=>{
        reject(err);
      });
    });
  }
}
