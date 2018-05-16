import { Component, OnInit , ViewChild} from '@angular/core';
import { GetHttpService } from '../../services/get-http.service';
import { EventModal } from '../../modal/event.modal';
import { PagerService } from '../../services/pager.service';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrantModal } from '../../modal/registrant.modal';
import { PaginateService } from '../../services/paginate.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // pie chart
  public pieChartLabels: string[] = ['Succeded', 'Failed'];
  public pieChartType = 'pie';

  public eventPieChartData: number[];
  public usersPieChartData: number[];

  public eventResults: any;
  public usersResults: any;

  public pieEventRawData: any;
  public pieUsersRawData: any;

  // Modal View
  public flagUser = false;
  public flagEvent = false;
  public modalSuccessFlag = false;
  public modalFailFlag = false;

  public successRawEvents: any;
  public failRawEvents: any;
  public finalArray = [{}];
  private allItems: any[];

  // page
  successLast: number;
  successCurrent: number;
  failLast: number;
  failCurrent: number;
  @ViewChild('myId') myId;
  @ViewChild('eventSuccessModal') modalSuccess;
  @ViewChild('eventFailModal') modalFail;
  constructor(private httpGet: GetHttpService, public paginateService: PaginateService) {
    // setInterval(() => { this.useViwChild(); } , 2000);
   }


  openModal (id) {
    const data = this.modalSuccess.nativeElement.modal('show');

  }
  // events
    public getEventData() {
    this.httpGet.getData('http://172.16.0.119:8080/event/counts')
      .subscribe((response) => {
        this.eventResults = response;
        // console.log('All Data' + this.eventResults);
        if (this.eventResults.status === 200) {
          this.pieEventRawData = this.eventResults.responseData;
          this.eventPieChartData = [this.pieEventRawData.successStatus, this.pieEventRawData.failedStatus];
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
        // console.log('All Data' + this.usersResults);
        if (this.usersResults.status === 200) {
          this.pieUsersRawData = this.usersResults.responseData;
          this.usersPieChartData = [this.pieUsersRawData.successStatus, this.pieUsersRawData.failedStatus];
          this.flagUser = true;
        } else {
          this.usersPieChartData = [50, 50];
          this.flagUser = true;
        }
      });
  }

  public checkColor(e) {
    const chartElement = e.active[0]._chart.getElementAtEvent(event);
    const chartColor = chartElement[0]._model.backgroundColor;
    // console.log(chartColor);

    return chartColor;
  }
  public eventChartClicked(e: any): void {
    console.log(e);
    const color: string = this.checkColor(e);
    console.log(color);

    if (color === 'rgba(5, 155, 255, 0.6)') {
      console.log('called1');

      this.httpGet.getData('http://172.16.0.119:8080/event?status=true')
        .subscribe((response) => {
          this.successRawEvents = response;
          if (this.successRawEvents.status === 200) {
            console.log(this.successRawEvents.responseData);
            this.modalSuccessFlag = true;
            this.paginateService.paginationInit(this.successRawEvents.responseData.length);
            this.successLast = this.paginateService.lastPage;
            this.successCurrent = this.paginateService.currentPage;
          }
        });
    } else {
      console.log('called2');

      this.httpGet.getData('http://172.16.0.119:8080/event?status=false')
        .subscribe((response) => {
          this.failRawEvents = response;
          if (this.failRawEvents.status === 200) {
            console.log(this.failRawEvents.responseData);
            this.modalFailFlag = true;
            this.paginateService.paginationInit(this.failRawEvents.responseData.length);
            this.failLast = this.paginateService.lastPage;
            this.failCurrent = this.paginateService.currentPage;
          }
        });
    }

  }
  public regChartClicked(e: any): void {
    console.log(e);
    this.httpGet.getData('http://172.16.0.119:8080/registrant?status=true')
      .subscribe((response) => {
        this.successRawEvents = response;
        if (this.successRawEvents.status === 200) {
          console.log(this.successRawEvents.responseData);
          this.modalSuccessFlag = true;
          this.paginateService.paginationInit(this.successRawEvents.responseData.length);
          this.successLast = this.paginateService.lastPage;
          this.successCurrent = this.paginateService.currentPage;
        }
      });

    this.httpGet.getData('http://172.16.0.119:8080/registrant?status=false')
      .subscribe((response) => {
        this.failRawEvents = response;
        if (this.failRawEvents.status === 200) {
          console.log(this.failRawEvents.responseData);
          this.modalFailFlag = true;
          this.paginateService.paginationInit(this.failRawEvents.responseData.length);
          this.failLast = this.paginateService.lastPage;
          this.failCurrent = this.paginateService.currentPage;

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
