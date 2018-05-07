import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetEventService {

  constructor(private httpGet: HttpClient) { }

  getData(api: string) {
    return this.httpGet.get(api);
  }


}

