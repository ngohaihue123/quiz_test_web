import { Student } from './../../../../models/student.model';
import { UserService } from './../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student = new Student();

  constructor(private activaticeRoute: ActivatedRoute, private studentService: UserService) { }

  ngOnInit() {
    let studentId = this.activaticeRoute.snapshot.params.id;
    if (studentId) {
      this.studentService.getStudentById(studentId).then(res => {
        this.student = res['data'];
        console.log("student", this.student);

      })

    }
  }
  save() {
    if (this.student._id) {
      this.studentService.update(this.student).then(res => {
        if (res && res['success']) {
          console.log(res);
        }
      })
    } else {
      this.studentService.add(this.student).then(res => {
        if (res && res['success']) {
          console.log(res);
        }
      })
    }

  }
}
