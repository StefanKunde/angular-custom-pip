import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MediaPlayerBase } from '../../media-player/interfaces/MediaPlayerBase';

@Component({
  selector: 'app-html5-video-wrapper',
  templateUrl: './html5-video-wrapper.component.html',
  styleUrls: ['./html5-video-wrapper.component.scss']
})
export class Html5VideoWrapperComponent extends MediaPlayerBase implements OnInit {


  @ViewChild('video') video!: ElementRef;
  @Input() videoUrl!: string;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();


  }

  ngAfterViewInit() {
    this.video.nativeElement.currentTime = this.startTimeInSec;
  }

  emitCurrentTime(): void {
    const currentTimeInSec = Math.round(this.video?.nativeElement.currentTime);
    this.changedTimeInSec.emit(currentTimeInSec)
  }

  videoPlayHandler(event: any) {
    console.log('Video started playing! Event: ', event);
    this.startPlaytimeIntervalTracker();
  }

  startPlaytimeIntervalTracker(): void {
    this.playTimeInterval = setInterval(() => {
      this.emitCurrentTime();
    }, 1000);
  }

}
