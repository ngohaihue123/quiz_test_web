import { Res } from '../models/res.model';
import { ManagementConfig } from './../configs/management.config';
import { Criteria } from './../models/criteria.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';



export class UserService {
    constructor(private httpService: HttpService) { }
    get(criteria: Criteria, studentClass): Promise<Res> {
        let url = `${ManagementConfig.GetUserUrl}?searchText=${criteria.searchText}&itemPerPage=${criteria.itemPerPage}&currentPage=${criteria.currentPage}&studentClass=${studentClass}`;
        return this.httpService.get(url);
    }
}