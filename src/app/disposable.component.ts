import { OnDestroy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ''
})
export abstract class DisposableComponent implements OnDestroy {
  public disposed: Subject<boolean>;

  constructor() {
    this.disposed = new Subject();
  }
  public ngOnDestroy(): void {
    this.disposed.next(true);
    this.disposed.complete();
  }
}
