import { Criteria } from './../../../models/criteria.model';
import { StudentTestService } from './../../../services/student_test.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css']
})
export class StudentTestComponent implements OnInit {
  criteria = new Criteria()
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentTestService: StudentTestService
  ) { }

  ngOnInit() {
    let testId = this.activatedRoute.snapshot.params.id;
    let page = this.activatedRoute.snapshot.params.page;
    if (page) {
      this.criteria.currentPage = page;
    } else {
      this.criteria.currentPage = 1;
    }
    this.criteria.currentPage = 1;
    this.getListStudent(this.criteria, testId);
  }
  getListStudent(criteria, testId) {
    this.studentTestService.getAllStudentDoTestByTestId(criteria, testId).then(students => {
      console.log(students);
    })
  }
}
