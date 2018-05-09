import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyCookiesService {

  constructor(private httpClient: HttpClient, private _cookieService: CookieService) { }

  getCookie(key: string) {
    return this._cookieService.get(key);
  }

  putCookie(id , password ) {
    this._cookieService.set(id , password);
  }
}
