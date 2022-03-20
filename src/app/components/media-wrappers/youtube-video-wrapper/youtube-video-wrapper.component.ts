import { Component, Inject } from '@angular/core';
import { DATA_TOKEN } from '../../../pages/videos/media/media-data.token';
import { PipService } from '../../../services/pip-service/pip-service';
import { MediaPlayerBase } from '../interfaces/MediaPlayerBase';

@Component({
  selector: 'app-youtube-video-wrapper',
  templateUrl: './youtube-video-wrapper.component.html',
  styleUrls: ['./youtube-video-wrapper.component.scss']
})
export class YoutubeVideoWrapperComponent extends MediaPlayerBase {
  youTubeVideoId?: string;
  youtubePlayer: any;
  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor(@Inject(DATA_TOKEN) private myData: any, private pipService: PipService) {
    super();
    this.youTubeVideoId = myData.youtubeVideoId;

  }

  ngAfterViewInit() {
    setTimeout(() => { // Timeout is needed because of timing problem of init and destroy iframe
      this.initYoutubeApi();
    }, 0);
  }

  initYoutubeApi() {
    // Return if youtube is already initialized
    if (window['YT']) {
      this.onYouTubeIframeAPIReady();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag: HTMLScriptElement = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    window['onYouTubeIframeAPIReady'] = () => this.onYouTubeIframeAPIReady();
  }

  onYouTubeIframeAPIReady() {
    this.youtubePlayer = new window['YT'].Player('youtubePlayer', {
      height: '360',
      width: '640',
      videoId: this.youTubeVideoId,
      playerVars: {
        autoplay: this.autoPlay ? 1 : 0,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1
      },
      events: {
        'onStateChange': this.onYoutubePlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onYoutubePlayerReady.bind(this),
      }
    });
  }

  // The API will call this function when the video player is ready.
  onYoutubePlayerReady(event: any) {
    if (this.isRestricted) {
      event.target.mute();
      if (this.autoPlay) event.target.playVideo();
    } else {
      if (this.autoPlay) event.target.playVideo();
    }

    if (this.autoPlay) this.youtubePlayer.seekTo(this.startTimeInSec);

    this.startPlaytimeIntervalTracker();
  }


  onYoutubePlayerStateChange(event: any) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.getCurrentTimeYoutube() == 0) {
          if (!this.autoPlay) this.youtubePlayer.seekTo(this.startTimeInSec);
          console.log('started ' + this.getCurrentTimeYoutube());
        } else {
          console.log('playing ' + this.getCurrentTimeYoutube())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.youtubePlayer.getDuration() - this.youtubePlayer.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.getCurrentTimeYoutube());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }

  getCurrentTimeYoutube() {
    return Math.round(this.youtubePlayer.getCurrentTime())
  }

  onPlayerError(event: any) {
    switch (event.data) {
      case 2:
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }

  startPlaytimeIntervalTracker(): void {
    this.playTimeInterval = setInterval(() => {
      this.emitCurrentTime();
    }, 1000);
  }

  emitCurrentTime(): void {
    this.changedTimeInSec.emit(this.getCurrentTimeYoutube())
  }
}
