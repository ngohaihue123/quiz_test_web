import { Res } from '../models/res.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


import { ManagementConfig } from '../configs/management.config';

import { HttpService } from '../services/http.service';

@Injectable()
export class FileService {

    constructor(private httpService: HttpService) { }

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

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
