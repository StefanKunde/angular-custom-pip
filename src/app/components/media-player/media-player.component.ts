import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DisposableComponent } from 'src/app/disposable.component';
import { DATA_TOKEN } from 'src/app/pages/videos/video/video-data.token';
import { PipService } from 'src/app/services/pip-service/pip-service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent extends DisposableComponent implements OnInit, OnDestroy {

  data!: { youtubeVideoId?: string, videoUrl?: string, audioUrl?: string };

  startTimeInSec: number = 0;
  autoPlay: boolean = true;

  // Youtube vars
  isYoutube: boolean = false;
  youTubeVideoId?: string;

  // html5 video vars
  isHtml5Video: boolean = false;
  videoUrl!: string;

  // html5 audio vars
  isHtml5Audio: boolean = false;
  audioUrl!: string;

  constructor(@Inject(DATA_TOKEN) private myData: any, private pipService: PipService) {
    super();
    if (myData.youtubeVideoId) {
      this.isYoutube = myData.embeddedHtml.includes('youtube');
      this.youTubeVideoId = myData.youtubeVideoId;
    } else if (myData.videoUrl) {
      this.isHtml5Video = true;
      this.videoUrl = myData.videoUrl;
    } else if (myData.audioUrl) {
      this.isHtml5Audio = true;
      this.audioUrl = myData.audioUrl;
    }

  }

  ngOnInit(): void {
    this.startTimeInSec = this.pipService.getCurrentTimeInSek();
  }

  ngAfterViewInit() {
    if (this.isYoutube) {
      setTimeout(() => { // Timeout is needed because of timing problem of init and destroy iframe
        this.startTimeInSec = this.pipService.getCurrentTimeInSek();
      }, 0);
    }
  }


  timeChangeHandler(timeInSec: number) {
    console.log('time from timeChangeHandler in media-player is: ', timeInSec);
    this.pipService.setCurrentTime(timeInSec);
  }

}