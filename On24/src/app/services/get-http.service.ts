import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetHttpService {
  constructor(private httpGet: HttpClient) { }

  getData(api: string) {
    return this.httpGet.get(api);
  }
}



