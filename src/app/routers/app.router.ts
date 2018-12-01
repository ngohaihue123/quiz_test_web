import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/userfolder/home/home.component';
import { UserexamComponent } from '../components/userfolder/userexam/userexam.component';
import { UserinfoComponent } from '../components/userfolder/userinfo/userinfo.component';
import { ShowinfoComponent } from '../components/userfolder/userinfo/showinfo/showinfo.component';
import { UpdateinfoComponent } from '../components/userfolder/userinfo/updateinfo/updateinfo.component';
import { HistoryexamComponent } from '../components/userfolder/userinfo/historyexam/historyexam.component';
import { UpdatepassComponent } from '../components/userfolder/userinfo/updatepass/updatepass.component';
const routes: Routes=[
    { path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent},
    { path: 'user', component: HomeComponent },
    { path: 'test/1', component: UserexamComponent },
    { path: 'userInfo', component: UserinfoComponent,
    children:[
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
    }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter { }
