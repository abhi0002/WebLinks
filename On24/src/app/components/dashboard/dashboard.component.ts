import { Component, OnInit } from '@angular/core';
import { GetHttpService } from '../../services/get-http.service';
import { EventModal } from '../../modal/event.modal';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pieChartLabels: string[] = ['Succeded', 'Failed'];
  public pieChartType = 'pie';

  public eventPieChartData: number[];
  public usersPieChartData: number[];

  public eventResults: any;
  public usersResults: any;

  public pieEventRawData: any;
  public pieUsersRawData: any;

  public flagUser = false;
  public flagEvent = false;
  public modalFlag = false;

  public successRawEvents: any;
  public successEvents: EventModal = {
                                id: null,
                                weblinkEventId: null,
                                on24EventId: null};
  public finalArray = [{}];

  constructor( private httpGet: GetHttpService) { }

  // events
  public getEventData() {
   this.httpGet.getData('http://172.16.0.119:8080/event/counts')
        .subscribe((response) => {
              this.eventResults = response;
              console.log('All Data' + this.eventResults);
              if (this.eventResults.status === 200) {
                this.pieEventRawData = this.eventResults.responseData;
                this.eventPieChartData = [this.pieEventRawData.successStatus , this.pieEventRawData.failedStatus];
                this.flagEvent = true;
                } else {
                  this.eventPieChartData = [50, 50];
                  this.flagEvent = true;
              }
        });
  }

  public getUserData() {
    this.httpGet.getData('http://172.16.0.119:8080/registrant/counts')
         .subscribe((response) => {
               this.usersResults = response;
               console.log('All Data' + this.usersResults);
               if (this.usersResults.status === 200) {
                 this.pieUsersRawData = this.usersResults.responseData;
                 this.usersPieChartData = [this.pieUsersRawData.successStatus , this.pieUsersRawData.failedStatus];
                 this.flagUser = true;
                 } else {
                   this.usersPieChartData = [50, 50];
                   this.flagUser = true;
               }
         });
   }

  public chartClicked(e: any): void {
    console.log(e);
    this.httpGet.getData('http://172.16.0.119:8080/event?status=true')
         .subscribe((response) => {
               this.successRawEvents = response;
               if (this.successRawEvents.status === 200) {
                 console.log(this.successRawEvents.responseData);
                 console.log('All Data' + this.finalArray);
                 this.modalFlag = true;
               }
         });

  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {
    this.flagUser = false;
    this.flagEvent = false;
    this.getUserData();
    this.getEventData();
  }

}
