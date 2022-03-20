import { Component, OnDestroy, OnInit } from '@angular/core';
import { PipService } from '../services/pip-service/pip-service';
import { Portal, PortalBridgeService } from '../services/portal-bridge/portal-bridge.service';

@Component({
  selector: 'app-pip-video',
  templateUrl: './pip-video.component.html',
  styleUrls: ['./pip-video.component.scss']
})
export class PipVideoComponent implements OnInit, OnDestroy {

  portal!: Portal | null | undefined;

  isPipMode: boolean = false;

  constructor(private portalBridge: PortalBridgeService, private pipService: PipService) {
  }


  ngOnInit(): void {
    this.pipService.pipMode$.subscribe(x => {
      this.isPipMode = x;
    });

    this.portalBridge.portal$.subscribe(x => {
      this.portal = x;
    })
  }

  ngOnDestroy(): void {
    console.log('Called ngOnDestroy PipVideoComponent');
  }

}

