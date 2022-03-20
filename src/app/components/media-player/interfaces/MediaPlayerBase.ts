import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DisposableComponent } from "src/app/disposable.component";

@Component({ template: '' })
export abstract class MediaPlayerBase extends DisposableComponent {

  /* Interval for tracking the current playTime. */
  playTimeInterval!: any;

  /* Start time of the video */
  @Input() startTimeInSec: number = 0;

  /* Immediately start video on load? */
  @Input() autoPlay: boolean = true;

  /* Event emitter for current Time of the media player. */
  @Output()
  changedTimeInSec: EventEmitter<number> = new EventEmitter<number>();

  abstract emitCurrentTime(): void;

  ngOnInit() {
    this.disposed.subscribe(x => {
      if (this.playTimeInterval) {
        clearInterval(this.playTimeInterval);
      }
    });
  }

}
