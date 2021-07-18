import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./http-interceptor-service.interceptor";
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import {AuthGuard} from "./AuthGuard";

const routes: Routes = [
    {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, RouterModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
