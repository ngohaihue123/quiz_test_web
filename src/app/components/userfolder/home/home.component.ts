import { DateTimeHelper } from './../../../helpers/datetime-helper';
import { TestService } from './../../../services/test.service';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Criteria } from '../../../models/criteria.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  criteria = new Criteria();
  loading: boolean;
  tests: any;
  constructor(
    private authService: AuthService,
    private testService: TestService,
    private activatedRoute: ActivatedRoute,
    private router: Router

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
    this.getListTest(this.criteria, student.class);

  }

  logout() {
    this.authService.logout();
  }


  formatDateTime(tests) {
    tests.forEach(test => {
      test.dateCreate = DateTimeHelper.formatDateTimeFromTimeUTC(test.dateCreate, "DD/MM/YYYY");
    });
  }

  getListTest(criteria, studentClass) {
    this.loading = true;
    this.testService.getAllTestByStudentClass(criteria, studentClass).then(res => {
      if (res && res['success']) {
        this.criteria = res.data.criteria;
        this.loading = false;
        this.tests = res.data.tests;
        this.formatDateTime(this.tests);
      } else {
        this.loading = false;
      }
    })

  }
  doingTest(testId) {
    this.router.navigate(["/test", testId]);
  }
}
