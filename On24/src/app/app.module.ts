// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

// import { Observable, of } from 'rxjs';
// import 'rxjs/add/operator/map';


// Components Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';

// Service Imports
import { HttpClientModule } from '@angular/common/http';
import { GetHttpService } from './services/get-http.service';
import { CookieService } from 'ngx-cookie-service';
import { ChartsModule } from 'ng2-charts';
import { PagerService } from './services/pager.service';
import { LogOutHeaderComponent } from './log-out-header/log-out-header.component';
import { CanDeactivateGuardLogInService } from './services/can-deactivate-guard-log-in.service';

// Router Path
const  appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canDeactivate: [CanDeactivateGuardLogInService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    LogOutHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    GetHttpService,
    CookieService,
    PagerService,
    CanDeactivateGuardLogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
