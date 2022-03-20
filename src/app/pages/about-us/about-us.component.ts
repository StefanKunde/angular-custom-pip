import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IframeComponent } from 'src/app/components/iframe/iframe.component';
import { Portal, PortalBridgeService } from 'src/app/services/portal-bridge/portal-bridge.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
