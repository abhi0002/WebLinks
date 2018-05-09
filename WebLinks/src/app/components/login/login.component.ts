import { Component, OnInit } from '@angular/core';
import { GetEventService } from '../../service/get-event.service';
import { Router } from '@angular/router';
import { MyCookiesService } from '../../service/my-cookies.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  userName: string;
  password: string;

  constructor(
        private getEvent: GetEventService , private router: Router , private _cookieService: MyCookiesService ) { }

  ngOnInit() {

  }

  getLogInData(id , password) {
    this.getEvent.getData('http://172.16.0.119:8080/public/login?email=' + id + '&password=' + password )
    // this.getEvent.getData('http://172.16.0.119:8080/public/login?email=test@mailinator.com&password=Abc@1234')

    .subscribe((response) => {
              this.users = response;
              console.log('logIn');
              console.log(this.users);

              if (this.users.status === 200) {
                this.router.navigate(['table']);
                this.setCookieValue( id , password);
              } else {
              console.log('Wrong Credentials');
              }
    });
  }
  setCookieValue(key , value) {
    this._cookieService.putCookie(key , value);
  }

  getCookieValue(key) {
  console.log(    this._cookieService.getCookie(key));

  }
}
