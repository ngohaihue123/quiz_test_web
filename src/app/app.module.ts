import { UserService } from './services/user.service';
import { StudentAddComponent } from './components/teacherfolder/student/student-add/student-add.component';

import { FileService } from './services/file.service';
import { UpdateinfoComponent } from './components/userfolder/userinfo/updateinfo/updateinfo.component';
import { UpdatepassComponent } from './components/userfolder/userinfo/updatepass/updatepass.component';
import { HistoryexamComponent } from './components/userfolder/userinfo/historyexam/historyexam.component';
import { UserinfoComponent } from './components/userfolder/userinfo/userinfo.component';
import { HomeComponent } from './components/userfolder/home/home.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/auth/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpService } from './services/http.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

// import {AuthService}

// Layout
import { AppComponent } from './app.component';


// Directives
import { LoadingDirective } from './directives/loading.directive';
import { WaitingComponent } from './directives/loading/loading.component';
import { WaitingDirective } from './directives/loading/loading.directive';

// Services
import { AuthGuard } from './guards';
import { AppRouter } from './routers/app.router';
import { CommonErrorHandler } from './helpers/error-handler'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserexamComponent } from './components/userfolder/userexam/userexam.component';
import { ShowinfoComponent } from './components/userfolder/userinfo/showinfo/showinfo.component';
import { CreateTestComponent } from './components/teacherfolder/create-test/create-test.component';
import { LoginTeacherComponent } from './components/teacherfolder/login/login-teacher.component';
import { StudentComponent } from './components/teacherfolder/student/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginTeacherComponent,
    StudentAddComponent,
    StudentComponent,
    UserinfoComponent,
    UserexamComponent,
    HistoryexamComponent,
    UpdatepassComponent,
    ShowinfoComponent,
    UpdateinfoComponent,
    HomeComponent,


    // directives
    LoadingComponent,
    LoadingDirective,
    WaitingComponent,
    WaitingDirective,
    CreateTestComponent,
    StudentAddComponent,
    StudentComponent

    // helpers

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouter,
    HttpClientModule,



  ],
  entryComponents: [
    LoadingComponent,
    WaitingComponent
  ],
  providers: [
    // { provide: ErrorHandler, useFactory: a0 },
    { provide: ErrorHandler, useClass: CommonErrorHandler },
    // {provide: APP_BASE_HREF, useValue : '/' + (window.location.pathname.split('/')[1] || '') },
    AuthGuard,
    HttpService,
    AuthService,
    FileService,
    UserService

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }