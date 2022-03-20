import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PipService } from '../services/pip-service/pip-service';
import { Portal, PortalBridgeService } from '../services/portal-bridge/portal-bridge.service';

@Component({
  selector: 'app-pip-video',
  templateUrl: './pip-video.component.html',
  styleUrls: ['./pip-video.component.scss']
})
export class PipVideoComponent implements OnInit {
  portal$!: Observable<Portal | null>;
  isPipMode: boolean = false;

  constructor(private portalBridge: PortalBridgeService, private pipService: PipService) {
    this.portal$ = this.portalBridge.portal$;
  }

  ngOnInit(): void {
    this.pipService.pipMode$.subscribe(x => {
      this.isPipMode = x;
    });
  }

}

