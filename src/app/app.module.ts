import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';

import { AppRouter } from './routers/app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/userfolder/home/home.component';
import { UserexamComponent } from './components/userfolder/userexam/userexam.component';
import { UserinfoComponent } from './components/userfolder/userinfo/userinfo.component';
import { ShowinfoComponent } from './components/userfolder/userinfo/showinfo/showinfo.component';
import { UpdateinfoComponent } from './components/userfolder/userinfo/updateinfo/updateinfo.component';
import { HistoryexamComponent } from './components/userfolder/userinfo/historyexam/historyexam.component';
import { UpdatepassComponent } from './components/userfolder/userinfo/updatepass/updatepass.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    UserexamComponent,
    UserinfoComponent,
    ShowinfoComponent,
    UpdateinfoComponent,
    HistoryexamComponent,
    UpdatepassComponent
  ],
  imports: [
    BrowserModule,
    AppRouter, 
    HttpModule,
  ],
  providers: [
    HttpService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
