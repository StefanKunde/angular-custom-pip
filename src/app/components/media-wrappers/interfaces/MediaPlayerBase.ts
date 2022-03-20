import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DisposableComponent } from "../../../disposable.component";

@Component({ template: '' })
export abstract class MediaPlayerBase extends DisposableComponent {

  /* Interval for tracking the current playTime. */
  playTimeInterval!: any;

  /* Start time of the video */
  @Input() startTimeInSec: number = 0;

  /* Immediately start video on load? */
  @Input() autoPlay: boolean = true;

  /* Event emitter for current Time of the media player. */
  @Output() changedTimeInSec: EventEmitter<number> = new EventEmitter<number>();

  /* Function to emit the current time in seconds. Usually called every seconds. */
  abstract emitCurrentTime(): void;

  ngOnInit() {
    this.disposed.subscribe(x => {
      if (this.playTimeInterval) {
        clearInterval(this.playTimeInterval);
      }
    });
  }

}
