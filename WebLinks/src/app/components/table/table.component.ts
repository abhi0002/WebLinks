import { Component, OnInit } from '@angular/core';
import { GetEventService } from '../../service/get-event.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { EventEmiterSerivce } from '../../service/event-emiter.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any;
  list: any;
  constructor(private getEvent: GetEventService, private eventEmiterService: EventEmiterSerivce) { }
    getDataForTable() {
              this.getEvent.getData('https://jsonplaceholder.typicode.com/users')
              .subscribe((data: {}) => {
                    this.users = data;
                    console.log('table data');
                    console.log(data);
                  });

      }

      fetchDataFromService() {
        this.list = this.eventEmiterService.getUserData();
      }
  ngOnInit() {
    console.log('hi table');
    // this.getDataForTable();
    this.fetchDataFromService();
  }

}
