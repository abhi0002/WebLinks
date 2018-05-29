import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {  } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService {
  // export class LoginRouteGuardService implements CanActivate{


  // public loggedIn = false;
  // public redirectURL: string;
  // constructor(private router: Router, ) { }

  // public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   this.redirectURL = state.url;
  //   return this.checkLogin(this.redirectURL);
  // }
  // checkLogin(url: string): boolean {
  //   if (this.loggedIn) {
  //     return true;
  //   } else {

  //   }
  // }
}


