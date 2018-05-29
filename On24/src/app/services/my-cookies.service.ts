import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MyCookiesService {

  constructor(private mycookie: CookieService) { }

  getCookies(key) {
   return this.mycookie.get(key);
  }
  setCookies(key , value) {
    this.mycookie.set(key , value);
  }
  getCookie(key) {
    return this.mycookie.get(key);
  }
  getAllCookies() {
    return this.mycookie.getAll();
  }
  deleteCookie() {
    return this.mycookie.deleteAll();
  }
}
