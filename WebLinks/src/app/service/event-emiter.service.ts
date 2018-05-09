import { Injectable } from '@angular/core';

@Injectable()
export class EventEmiterSerivce {
   list: any;
   getUserData() {
      return this.list;
   }
   setUserData(data: any[]) {
       this.list = data;
   }
}

