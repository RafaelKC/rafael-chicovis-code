import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MobileCheckService {
  private isMobileSubject = new BehaviorSubject<boolean>(true);
  public isMobile = this.isMobileSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: never) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  }

  private checkScreenSize() {
    const isMobile = window.innerWidth <= 767;
    this.isMobileSubject.next(isMobile);
  }
}
