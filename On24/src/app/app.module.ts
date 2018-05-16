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

// Router Path
const  appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent
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
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
