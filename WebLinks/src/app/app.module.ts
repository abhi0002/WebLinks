import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


// Component Imports
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EventsComponent } from './components/events/events.component';
import { HeaderComponent } from './components/header/header.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
// Service Imports
import { CookieService } from 'ngx-cookie-service';
import { GetEventService } from './service/get-event.service';
import { ServerService } from './service/server.service';
import { PagerService } from './service/pager.service';
import { TableComponent } from './components/table/table.component';
import { EventEmiterSerivce } from './service/event-emiter.service';
import { CookieModule } from 'ngx-cookie';
import { MyCookiesService } from './service/my-cookies.service';


const  appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'events', component: EventsComponent},
  {path: 'table', component: TableComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
    EventsComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CookieModule.forRoot(),
    ChartsModule
    ],
  providers: [
    CookieService,
    GetEventService,
    ServerService,
    PagerService,
    EventEmiterSerivce,
    MyCookiesService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
