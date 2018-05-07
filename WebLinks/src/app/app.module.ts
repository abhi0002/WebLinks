import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




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



const  appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'events', component: EventsComponent}
  // {path: 'app-clients-details', component: ClientsDetailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventsComponent,
    EventsComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ],
  providers: [
    CookieService,
    GetEventService,
    ServerService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
