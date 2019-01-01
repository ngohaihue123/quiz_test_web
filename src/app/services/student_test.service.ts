import { Res } from '../models/res.model';
import { ManagementConfig } from './../configs/management.config';
import { Criteria } from './../models/criteria.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentTestService {
    constructor(private httpService: HttpService) { }

    get(criteria: Criteria, studentClass): Promise<Res> {
        let url = `${ManagementConfig.GetTestUrl}?searchText=${criteria.searchText}&itemPerPage=${criteria.itemPerPage}&currentPage=${criteria.currentPage}&class=${studentClass}`;
        return this.httpService.get(url);
    }

    getTestById(testId): Promise<Res> {
        let url = `${ManagementConfig.GetTestByIdUrl}?id=${testId}`;
        return this.httpService.get(url);
    }

    update(student): Promise<Res> {
        let url = `${ManagementConfig.UpdateTestURl}`;
        return this.httpService.put(url, student);
    }

    add(studentTest): Promise<Res> {
        let url = `${ManagementConfig.AddStudentTestrUrl}`;
        return this.httpService.post(url, studentTest);
    }

    getTestByStudentClass(classNumber): Promise<Res> {
        let url = `${ManagementConfig.GetTestByStudentClassUrl}?id=${classNumber}`;
        return this.httpService.get(url);
    }

    getAllByStudentId(criteria: Criteria, studentId): Promise<Res> {
        let url = `${ManagementConfig.GetAllStudentHistoryTestrUrl}?searchText=${criteria.searchText}&itemPerPage=${criteria.itemPerPage}&currentPage=${criteria.currentPage}&studentId=${studentId}`;
        return this.httpService.get(url);
    }

    getAllStudentDoTestByTestId(criteria: Criteria, testId): Promise<Res> {
        let url = `${ManagementConfig.getAllStudentDoTestByTestIdUrl}?searchText=${criteria.searchText}&itemPerPage=${criteria.itemPerPage}&currentPage=${criteria.currentPage}&testId=${testId}`;
        return this.httpService.get(url);
    }

}
