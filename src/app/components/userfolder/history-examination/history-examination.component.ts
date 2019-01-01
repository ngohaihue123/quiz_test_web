import { StudentTestService } from './../../../services/student_test.service';
import { Component, OnInit } from '@angular/core';
import { DateTimeHelper } from './../../../helpers/datetime-helper';
import { Router, ActivatedRoute } from '@angular/router';
import { Criteria } from '../../../models/criteria.model';
@Component({
  selector: 'app-history-examination',
  templateUrl: './history-examination.component.html',
  styleUrls: ['./history-examination.component.css']
})
export class HistoryExaminationComponent implements OnInit {
  criteria = new Criteria();
  historyTests: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private studentTestService: StudentTestService,
  ) { }

  ngOnInit() {
    let page = this.activatedRoute.snapshot.params.page;
    if (page) {
      this.criteria.currentPage = page;
    } else {
      this.criteria.currentPage = 1;
    }
    this.criteria.currentPage = 1;
    let student = JSON.parse(localStorage.getItem('i'));
    console.log(student);
    this.getListHistoryTests(this.criteria, student.idStudent);
  }
  getListHistoryTests(criteria, studentId) {
    this.studentTestService.getAllByStudentId(criteria, studentId).then(data => {
      if (data && data.success) {
        this.historyTests = data.data.tests;
        this.formatDateTime(this.historyTests);
      }
    })
  }

  formatDateTime(tests) {
    tests.forEach(test => {
      test.dateCreate = DateTimeHelper.formatDateTimeFromTimeUTC(test.dateCreate, "DD/MM/YYYY");
    });
  }
}
