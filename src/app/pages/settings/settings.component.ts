import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Portal, PortalBridgeService } from 'src/app/services/portal-bridge/portal-bridge.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ngOnInit(): void {
  }

}
