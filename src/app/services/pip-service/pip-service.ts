import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');


@Injectable({
  providedIn: 'root',
})
export class PipService {
  pipMode$!: BehaviorSubject<boolean>;
  mediaId!: number;
  currentTimeInSec!: number;



  constructor() {
    this.pipMode$ = new BehaviorSubject<boolean>(false);
  }

  activatePipMode(): void {
    this.pipMode$.next(true);
  }

  deactivatePipMode(): void {
    this.pipMode$.next(false);
  }

  getCurrentMediaId(): number {
    return this.mediaId;
  }

  setMediaId(id: number) {
    this.mediaId = id;
  }

  getCurrentTimeInSek() {
    return this.currentTimeInSec;
  }

  setCurrentTime(timeInSec: number) {
    this.currentTimeInSec = timeInSec;
  }


}
