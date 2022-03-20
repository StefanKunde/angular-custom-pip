import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaPlayerComponent } from '../../../components/media-player/media-player.component';
import { videos, VideoData } from '../../../data/videos';
import { DisposableComponent } from '../../../disposable.component';
import { PipService } from '../../../services/pip-service/pip-service';
import { PortalBridgeService } from '../../../services/portal-bridge/portal-bridge.service';
import { DATA_TOKEN } from './media-data.token';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent extends DisposableComponent implements OnInit {

  id!: string;
  videos = videos;
  video!: VideoData;

  portal$!: Observable<Portal<any> | null>;
  componentPortal!: ComponentPortal<MediaPlayerComponent>;

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
    this.pipService.setCurrentTimeInSec(0);
    const data = {
      youtubeVideoId: this.video.youtubeVideoId,
      videoUrl: this.video.videoUrl,
      audioUrl: this.video.audioUrl
    }
    const portalInjector = Injector.create({
      providers: [{ provide: DATA_TOKEN, useValue: data }],
    });

    this.componentPortal = new ComponentPortal<MediaPlayerComponent>(MediaPlayerComponent, null, portalInjector);


    this.pipService.setMediaId(this.video.id);
    this.portalBridge.setPortal(this.componentPortal);
  }

}
