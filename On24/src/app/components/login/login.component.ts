import {GetHttpService} from '../../services/get-http.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MyCookiesService } from '../../services/my-cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  email: string;
  pass: string;
  constructor(
          private router: Router ,
          private getHttp: GetHttpService,
          private myCookie: MyCookiesService
              ) { }

  ngOnInit() {
  }

  getLogInData(id , password) {
    this.getHttp.getData('http://172.16.0.119:8080/public/login?email=' + id + '&password=' + password )

    .subscribe((response) => {
              this.users = response;
              console.log('logIn');
              console.log(this.users);

              if (this.users.status === 200) {
                this.router.navigate(['dashboard']);
                this.myCookie.setCookies( id , password);
              } else {
              console.log('Wrong Credentials');
              }
    });
  }

}
