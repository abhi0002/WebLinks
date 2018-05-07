import { Component } from '@angular/core';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private serverService: ServerService) {}

  onSave() {
    this.serverService.storeServers()
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
