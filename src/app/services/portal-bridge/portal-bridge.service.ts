import {
  TemplatePortal,
  ComponentPortal,
  DomPortal,
} from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export type Portal = TemplatePortal | ComponentPortal<any> | DomPortal;

@Injectable({
  providedIn: 'root',
})
export class PortalBridgeService {
  private activePortal = new BehaviorSubject<Portal | null>(null);

  readonly portal$ = this.activePortal.asObservable();


  constructor() {
  }

  setPortal(portal: Portal | null) {
    this.activePortal.next(portal);
  }
}
