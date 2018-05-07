import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private httpCl: HttpClient) {}
  storeServers() {
    return this.httpCl.get('https://jsonplaceholder.typicode.com/users');
  }
}
