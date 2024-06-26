import {Component, OnDestroy, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptop, faWindowMinimize, faXmark, faPlay, faStop, faBug } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import {MobileCheckService} from "../services/mobile-check.service";
import {SubscriptionManager} from "../tokens/subscription-manager";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  public laptopIcon = faLaptop;
  public timesIcon = faXmark;
  public minimizeIcon = faWindowMinimize;
  public maximizeIcon = faWindowMaximize;
  public playIcon = faPlay;
  public stopIcon = faStop;
  public bugIcon = faBug;
  public angularIcon = faAngular;

  public isMobile: boolean = true;

  private subs = new SubscriptionManager();

  constructor(private readonly mobileCheckService: MobileCheckService) {
  }

  public ngOnInit(): void {
    this.initMobileSub();
  }

  public ngOnDestroy(): void {
    this.subs.clear();
  }

  private initMobileSub() {
    const sub = this.mobileCheckService.isMobile.subscribe({
      next: value => this.isMobile = value
    })
    this.subs.add(sub);
  }
}
