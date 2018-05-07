import { Component, OnInit } from '@angular/core';
import { GetEventService } from '../../service/get-event.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;
  cookieValue = 'UNKNOWN';

  constructor(private getEvent: GetEventService , private cookieService: CookieService ) { }

  getAllData() {
    console.log('Get home Function');
    this.getEvent.getData('https://jsonplaceholder.typicode.com/users');
  }
  ngOnInit(): void {
      this.cookieService.set( 'Test', 'Hello World' );
      this.cookieValue = this.cookieService.get('Test');
      console.log('Hello Home ' + this.getEvent.getData('https://jsonplaceholder.typicode.com/users'));
      this.getAllData();
    }
}
