import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  public readonly toggleSubject = new Subject<void>();
  public readonly openedSubject = new Subject<boolean>();

  public close(): void {
    this.openedSubject.next(false);
  }

  public open(): void {
    this.openedSubject.next(true);
  }

  public toggle(): void {
    this.toggleSubject.next();
  }
}
