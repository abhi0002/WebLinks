import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeServiceService } from './service/home-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    EventsComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
