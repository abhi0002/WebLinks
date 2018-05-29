import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardLogInService implements CanDeactivate<DashboardComponent> {

  canDeactivate(component: DashboardComponent): boolean {
    // return confirm('You will be logged out. Do you want to continue?');
    return false;
  }
  constructor(private route: Router) { }
}
