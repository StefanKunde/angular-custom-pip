import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, takeUntil, tap } from 'rxjs';
import { IframeComponent } from 'src/app/components/iframe/iframe.component';
import { VideoData, videos } from 'src/app/data/videos';
import { DisposableComponent } from 'src/app/disposable.component';
import { PipService } from 'src/app/services/pip-service/pip-service';
import { Portal, PortalBridgeService } from 'src/app/services/portal-bridge/portal-bridge.service';
import { DATA_TOKEN } from './video-data.token';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent extends DisposableComponent implements OnInit {

  id!: string;
  embeddedHtml!: string;
  videos = videos;
  video!: VideoData;

  portal$!: Observable<Portal | null>;
  componentPortal!: ComponentPortal<IframeComponent>;

  constructor(private activatedRoute: ActivatedRoute, private portalBridge: PortalBridgeService, private pipService: PipService) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.disposed)).subscribe(async (params: any) => {
      this.id = params.id;
      this.video = this.videos.find(x => x.id.toString() === this.id) as VideoData;
    });

    this.pipService.deactivatePipMode();

    if (this.video?.id !== this.pipService.getCurrentMediaId()) {
      this.createVideoPortal();
    }

    this.portal$ = this.portalBridge.portal$

    this.disposed.subscribe(x => {
      this.pipService.activatePipMode();

    });
  }

  createVideoPortal() {
    console.log('set Time to 0');
    this.pipService.setCurrentTime(0);
    const data = {
      embeddedHtml: this.video.embeddedHtml,
      youtubeVideoId: this.video.youtubeVideoId
    }
    const portalInjector = Injector.create({
      providers: [{ provide: DATA_TOKEN, useValue: data }],
    });

    this.componentPortal = new ComponentPortal<IframeComponent>(IframeComponent, null, portalInjector);


    this.pipService.setMediaId(this.video.id);
    this.portalBridge.setPortal(this.componentPortal);
  }

}
