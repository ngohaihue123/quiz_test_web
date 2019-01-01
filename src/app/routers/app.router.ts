import { StudentTestComponent } from './../components/teacherfolder/student-test/student-test.component';
import { HistoryExaminationComponent } from './../components/userfolder/history-examination/history-examination.component';
import { TestComponent } from './../components/teacherfolder/test/test/test.component';
import { StudentComponent } from './../components/teacherfolder/student/student/student.component';
import { StudentAddComponent } from './../components/teacherfolder/student/student-add/student-add.component';
import { CreateTestComponent } from './../components/teacherfolder/test/create-test.component';
import { UpdatepassComponent } from './../components/userfolder/userinfo/updatepass/updatepass.component';
import { HistoryexamComponent } from './../components/userfolder/userinfo/historyexam/historyexam.component';
import { UpdateinfoComponent } from './../components/userfolder/userinfo/updateinfo/updateinfo.component';
import { ShowinfoComponent } from './../components/userfolder/userinfo/showinfo/showinfo.component';
import { UserinfoComponent } from './../components/userfolder/userinfo/userinfo.component';
import { UserexamComponent } from './../components/userfolder/userexam/userexam.component';
import { HomeComponent } from './../components/userfolder/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login';
import { LoginTeacherComponent } from '../components/teacherfolder/login/login-teacher.component';



const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },

    { path: 'user', component: HomeComponent },
    { path: 'test/:testId', component: UserexamComponent },
    {
        path: 'userInfo', component: UserinfoComponent,
        children: [
            {
                path: 'showInfo', component: ShowinfoComponent
            },
            {
                path: 'updateInfo', component: UpdateinfoComponent
            },
            {
                path: 'historyExam', component: HistoryexamComponent
            },
            {
                path: 'updatePass', component: UpdatepassComponent
            }
        ]
    },
    { path: 'history', component: HistoryExaminationComponent },
    { path: 'teacher', component: LoginTeacherComponent },
    { path: 'teacher/test/add', component: CreateTestComponent },
    { path: 'teacher/tests', component: TestComponent },
    { path: 'teacher/test/:id', component: CreateTestComponent },
    { path: 'teacher/login', component: LoginTeacherComponent },
    { path: 'teacher/students', component: StudentComponent },
    { path: 'teacher/students/student/:id', component: StudentAddComponent },
    { path: 'teacher/students/add', component: StudentAddComponent },
    { path: 'teacher/test/history/:id', component: StudentTestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRouter { }