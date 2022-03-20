import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DisposableComponent } from 'src/app/disposable.component';
import { DATA_TOKEN } from 'src/app/pages/videos/video/video-data.token';
import { PipService } from 'src/app/services/pip-service/pip-service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent extends DisposableComponent implements OnInit, OnDestroy {

  data!: { embeddedHtml: string };
  safeHtml!: SafeHtml;


  // Youtube vars
  isYoutube: boolean = false;
  youTubeVideoId?: string;
  YT: any;
  youtubePlayer: any;
  startTimeInSec: number = 0;
  playTimeInterval!: any;
  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor(@Inject(DATA_TOKEN) private myData: any, private sanitizer: DomSanitizer, private pipService: PipService) {
    super();
    if (myData.embeddedHtml) {
      this.isYoutube = myData.embeddedHtml.includes('youtube');
      this.youTubeVideoId = myData.youtubeVideoId;
    }
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.myData.embeddedHtml);

  }

  ngOnInit(): void {
    console.log('ngOnInit IframeComponent');

    this.disposed.subscribe(x => {
      clearInterval(this.playTimeInterval)
    })
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit IframeComponent');
    if (this.isYoutube) {
      setTimeout(() => { // Timeout is needed because of timing problem of init and destroy iframe
        this.startTimeInSec = this.pipService.getCurrentTimeInSek();
        this.initYoutubeApi();

      }, 0);
    }
  }



  // Youtube handling methods

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
    console.log('API IS loaded ');
    window['onYouTubeIframeAPIReady'] = () => this.onYouTubeIframeAPIReady();
  }

  onYouTubeIframeAPIReady() {
    this.youtubePlayer = new window['YT'].Player('youtubePlayer', {
      height: '360',
      width: '640',
      videoId: this.youTubeVideoId,
      playerVars: {
        autoplay: 1,
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



  // 4. The API will call this function when the video player is ready.
  onYoutubePlayerReady(event: any) {
    if (this.isRestricted) {
      event.target.mute();
      event.target.playVideo();
    } else {
      event.target.playVideo();
    }

    this.youtubePlayer.seekTo(this.startTimeInSec);

    this.playTimeInterval = setInterval(() => {
      this.pipService.setCurrentTime(this.getCurrentTimeYoutube());
    }, 1000);
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  onYoutubePlayerStateChange(event: any) {
    //console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.getCurrentTimeYoutube() == 0) {
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



}
