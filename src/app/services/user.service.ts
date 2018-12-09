import { Res } from '../models/res.model';
import { ManagementConfig } from './../configs/management.config';
import { Criteria } from './../models/criteria.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
    constructor(private httpService: HttpService) { }
    get(criteria: Criteria, studentClass): Promise<Res> {
        let url = `${ManagementConfig.GetUserUrl}?searchText=${criteria.searchText}&itemPerPage=${criteria.itemPerPage}&currentPage=${criteria.currentPage}&class=${studentClass}`;
        return this.httpService.get(url);
    }
    getStudentById(studentId): Promise<Res> {
        let url = `${ManagementConfig.GetUserByIdUrl}?id=${studentId}`;
        return this.httpService.get(url);
    }
    update(student): Promise<Res> {
        let url = `${ManagementConfig.UpdateUserURl}`;
        return this.httpService.put(url, student);
    }
    add(student): Promise<Res> {
        let url = `${ManagementConfig.AddUserUrl}`;
        return this.httpService.post(url, student);
    }

}