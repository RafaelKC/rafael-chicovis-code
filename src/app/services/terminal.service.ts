import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private readonly toggleSubject = new Subject<void>();
  private readonly openedSubject = new Subject<boolean>();

  public shouldOpen = this.openedSubject.asObservable();
  public shouldToggle = this.toggleSubject.asObservable();

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
