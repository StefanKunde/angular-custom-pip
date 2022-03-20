import { Component, OnDestroy, OnInit } from '@angular/core';
import { last, Observable, takeUntil, tap } from 'rxjs';
import { Portal, PortalBridgeService } from 'src/app/services/portal-bridge/portal-bridge.service';

@Component({
  selector: 'app-video',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
