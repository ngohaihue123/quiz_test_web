import { Criteria } from './../../../../models/criteria.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from './../../../../services/test.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  criteria = new Criteria();
  loading: boolean;
  tests: any;
  constructor(private testServcie: TestService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let page = this.activatedRoute.snapshot.params.page;
    if (page) {
      this.criteria.currentPage = page;
    } else {
      this.criteria.currentPage = 1;
    }
    this.criteria.currentPage = 1;
    this.getTest(this.criteria, 10);
  }
  getTest(criteria, studentClass) {
    this.loading = true;
    this.testServcie.get(criteria, studentClass).then(res => {
      if (res && res['success']) {
        this.criteria = res.data.criteria;
        this.loading = false;
        this.tests = res.data.tests;
      } else {
        this.loading = false;
        console.log(res.message);
      }
    })
  }
  createTest() {
    this.router.navigate(['teacher/test/add']);
  }
}
