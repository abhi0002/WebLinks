import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageHead = '/assets/36912781-business-wallpaper.jpg';
  constructor() { }

  ngOnInit() {
  }

}
