import { PipeTransform } from '@angular/core';
import { EventModal } from '../modal/event.modal';

export class EventFilterPipe implements PipeTransform {
  transform(events: EventModal[], searchTerm: number) {
    if (!events || !searchTerm) {
      return events;
    }
    // return events.filter(e =>
    //   e.id.indexOf(searchTerm) !== -1);
  }
}
