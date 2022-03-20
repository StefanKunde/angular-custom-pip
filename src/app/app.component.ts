import { Component } from '@angular/core';
import { PipService } from './services/pip-service/pip-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public pipService: PipService) {

  }
}
