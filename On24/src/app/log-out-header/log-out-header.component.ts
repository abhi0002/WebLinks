import { Component, OnInit } from '@angular/core';
import { MyCookiesService } from '../services/my-cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out-header',
  templateUrl: './log-out-header.component.html',
  styleUrls: ['./log-out-header.component.css']
})
export class LogOutHeaderComponent implements OnInit {

  constructor(private myCookiesService: MyCookiesService, private router: Router) { }

  onLogOut() {
    this.myCookiesService.deleteCookie();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
