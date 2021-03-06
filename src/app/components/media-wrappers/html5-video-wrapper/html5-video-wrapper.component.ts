import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MediaPlayerBase } from '../interfaces/MediaPlayerBase';

@Component({
  selector: 'app-html5-video-wrapper',
  templateUrl: './html5-video-wrapper.component.html',
  styleUrls: ['./html5-video-wrapper.component.scss']
})
export class Html5VideoWrapperComponent extends MediaPlayerBase {


  @ViewChild('video') video!: ElementRef;
  @Input() videoUrl!: string;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this.video.nativeElement.currentTime = this.startTimeInSec;
  }

  emitCurrentTime(): void {
    const currentTimeInSec = Math.round(this.video?.nativeElement.currentTime);
    this.changedTimeInSec.emit(currentTimeInSec)
  }

  videoPlayHandler(event: any) {
    this.startPlaytimeIntervalTracker();
  }

  startPlaytimeIntervalTracker(): void {
    this.playTimeInterval = setInterval(() => {
      this.emitCurrentTime();
    }, 1000);
  }

}
