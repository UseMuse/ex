import { Component } from '@angular/core';
//import { TestServiceService } from 'my-lib/lib/services/test-service.service';//dont work
import { TestServiceService } from 'my-lib'; //work
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private MyLibService: TestServiceService) {}
}
