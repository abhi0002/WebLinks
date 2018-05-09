import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';

@Injectable()
export class GetEventService {
  // subjectObj = new Subject;
  constructor(private httpGet: HttpClient) { }

  getData(api: string) {
    return this.httpGet.get(api);
  }

  // transferData(data) {
  //   this.subjectObj.next(data);
  // }


}

