
import { UserService } from './../../../../services/user.service';
import { Criteria } from './../../../../models/criteria.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  criteria = new Criteria();
  loading: boolean = false;
  students: any;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    let page = this.activatedRoute.snapshot.params.page;
    if (page) {
      this.criteria.currentPage = page;
    } else {
      this.criteria.currentPage = 1;
    }
    this.criteria.currentPage = 1;
    this.getStudents(this.criteria, 10);
  }

  getStudents(criteria, studentClass) {
    this.loading = true;
    this.userService.get(criteria, studentClass).then(res => {
      if (res && res['success']) {
        this.criteria = res.data.criteria;
        this.loading = false;
        this.students = res.data.students;
      } else {
        this.loading = false;
        console.log(res.message);
      }
    })
  }
  createStudent() {
    this.router.navigate(['teacher/students/add']);
  }
}