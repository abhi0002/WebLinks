import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { GetEventService } from '../../service/get-event.service';
import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Observable';
import { EventEmiterSerivce } from '../../service/event-emiter.service';
import * as d3 from 'd3';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any;
  list: any;
  data  = [20, 80];

  // pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartRawData: any;
  public pieChartData: number[] ;
  public pieChartType = 'pie';

  constructor( private element: ElementRef, private getEvent: GetEventService, private eventEmiterService: EventEmiterSerivce) { }

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
  getDataForTable() {
              this.getEvent.getData('http://172.16.0.119:8080/event/counts')
              .subscribe((data: {}) => {
                    this.users = data;
                    console.log('table data');
                    console.log(data);
                    this.pieChartRawData = this.users.responseData;
                    console.log(this.pieChartRawData);
                    this.pieChartData = [this.pieChartRawData.successStatus , this.pieChartRawData.failedStatus];
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
