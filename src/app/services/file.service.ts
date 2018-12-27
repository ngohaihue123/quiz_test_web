import { Res } from '../models/res.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ManagementConfig } from '../configs/management.config';
import { HttpService } from '../services/http.service';
let oReq = new XMLHttpRequest();
oReq.responseType = "arraybuffer";
@Injectable()
export class FileService {

    constructor(private httpService: HttpService, private http: Http) { }

    readFile(formData: FormData, type: string): Promise<Res> {
        let bgUrl = ManagementConfig.ReadFileUrl + '?type=' + type;
        return this.httpService.uploadwithcallback(bgUrl, formData, res => {
            let result = res.json();
            return result;
        });
    }

    uploadFile(formData: FormData, type: string): Promise<Res> {
        let bgUrl = ManagementConfig.UploadFileUrl + '?type=' + type;
        return this.httpService.uploadwithcallback(bgUrl, formData, res => {
            let result = res.json();
            return result;
        });
    }

    uploadMultiFiles(formData: FormData, type: string): Promise<Res> {
        let bgUrl = ManagementConfig.UploadMultipleFilesUrl + '?type=' + type;
        return this.httpService.uploadwithcallback(bgUrl, formData, res => {
            let result = res.json();
            return result;
        });
    }
    getFile(fileName): Promise<any> {
        let fileUrl = ManagementConfig.GetFileUrl + '?filename=' + fileName;
        return this.httpService.get(fileUrl);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
