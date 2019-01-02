import { Student } from './../../../../models/student.model';
import { UserService } from './../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student = new Student();

  constructor(private activaticeRoute: ActivatedRoute, private studentService: UserService, private router: Router) { }

  ngOnInit() {
    let studentId = this.activaticeRoute.snapshot.params.id;
    if (studentId) {
      this.studentService.getStudentById(studentId).then(res => {
        this.student = res['data'];
      })

    }
  }
  save() {
    if (this.student._id) {
      this.studentService.update(this.student).then(res => {
        if (res && res['success']) {
          this.router.navigate(['/teacher/students'])

        }
      })
    } else {
      this.studentService.add(this.student).then(res => {
        if (res && res['success']) {
          this.router.navigate(['/teacher/students'])
        }
      })
    }

  }
}
