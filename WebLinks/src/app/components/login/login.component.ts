import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GetEventService } from '../../service/get-event.service';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  constructor(private getEvent: GetEventService) {}

  ngOnInit() {
      this.getEvent.getData('https://jsonplaceholder.typicode.com/users')
        .subscribe((response) => {
        this.users = response;
        console.log(this.users);
        this.checkdata();
      });
      // this.checkdata();
  }

  checkdata() {
    for (let index = 0; index < this.users.length; index++) {
      const element = this.users[index];
      console.log(element);
    }
  }
}
