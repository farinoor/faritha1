import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DummyComponent } from './dummy/dummy.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaginationComponent } from './pagination/pagination.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'employee', component: EmployeeComponent },

  { path: '**', component: PagenotfoundComponent },
  { path: 'pagination', component: PaginationComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    DummyComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeComponent,
    PagenotfoundComponent,
    PaginationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
