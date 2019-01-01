import { Component, OnInit } from '@angular/core';
import { DateTimeHelper } from './../../../helpers/datetime-helper';
import { Criteria } from './../../../models/criteria.model';
import { StudentTestService } from './../../../services/student_test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-test',
  templateUrl: './history-test.component.html',
  styleUrls: ['./history-test.component.css']
})
export class HistoryTestComponent implements OnInit {
  criteria = new Criteria();
  historyTests: any;
  constructor(private activatedRoute: ActivatedRoute,
    private studentTestService: StudentTestService) { }
  ngOnInit() {
    let studentId = this.activatedRoute.snapshot.params.id;
    let page = this.activatedRoute.snapshot.params.page;
    if (page) {
      this.criteria.currentPage = page;
    } else {
      this.criteria.currentPage = 1;
    }
    this.criteria.currentPage = 1;
    this.getListHistoryTests(this.criteria, studentId)
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
