import { AlertService } from './services/alert.service';
import { StudentTestService } from './services/student_test.service';
import { CreateTestComponent } from './components/teacherfolder/test/create-test.component';
import { TestService } from './services/test.service';
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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';


// Directives
import { LoadingDirective } from './directives/loading.directive';
import { WaitingComponent } from './directives/loading/loading.component';
import { WaitingDirective } from './directives/loading/loading.directive';
import { AuthGuard } from './guards';
import { AppRouter } from './routers/app.router';
import { CommonErrorHandler } from './helpers/error-handler'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserexamComponent } from './components/userfolder/userexam/userexam.component';
import { ShowinfoComponent } from './components/userfolder/userinfo/showinfo/showinfo.component';
import { LoginTeacherComponent } from './components/teacherfolder/login/login-teacher.component';
import { StudentComponent } from './components/teacherfolder/student/student/student.component';
import { TestComponent } from './components/teacherfolder/test/test/test.component';
import { HistoryExaminationComponent } from './components/userfolder/history-examination/history-examination.component';
import { StudentTestComponent } from './components/teacherfolder/student-test/student-test.component';
import { AlertComponent } from './directives/alert/alert.component';
import { HistoryTestComponent } from './components/teacherfolder/history-test/history-test.component';


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
    StudentComponent,
    TestComponent,
    HistoryExaminationComponent,
    StudentTestComponent,
    AlertComponent,
    HistoryTestComponent

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
    PdfViewerModule
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
    UserService,
    TestService,
    StudentTestService,
    AlertService

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }