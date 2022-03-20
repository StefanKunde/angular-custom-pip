import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MediaPlayerBase } from '../../media-player/interfaces/MediaPlayerBase';

@Component({
  selector: 'app-html5-audio-wrapper',
  templateUrl: './html5-audio-wrapper.component.html',
  styleUrls: ['./html5-audio-wrapper.component.scss']
})
export class Html5AudioWrapperComponent extends MediaPlayerBase implements OnInit {

  @ViewChild('audio') audio!: ElementRef;
  @Input() audioUrl!: string;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    this.audio.nativeElement.currentTime = this.startTimeInSec;
  }

  emitCurrentTime(): void {
    const currentTimeInSec = Math.round(this.audio?.nativeElement.currentTime);
    this.changedTimeInSec.emit(currentTimeInSec)
  }

  videoPlayHandler(event: any) {
    console.log('Audio started playing! Event: ', event);
    this.startPlaytimeIntervalTracker();
  }

  startPlaytimeIntervalTracker(): void {
    this.playTimeInterval = setInterval(() => {
      this.emitCurrentTime();
    }, 1000);
  }

}
