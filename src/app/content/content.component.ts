import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {FilesManagerComponent} from "../files-manager/files-manager.component";
import {RouterOutlet} from "@angular/router";
import {SubscriptionManager} from "../tokens/subscription-manager";
import {MobileCheckService} from "../services/mobile-check.service";
import {SideNavService} from "../services/side-nav.service";
import {TerminalComponent} from "../terminal/terminal.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatDrawerContainer,
    FilesManagerComponent,
    RouterOutlet,
    MatDrawer,
    TerminalComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('drawer', { read: MatDrawer }) private drawer?: MatDrawer;

  public opened = true;
  public isMobile = false;

  private subs = new SubscriptionManager();

  constructor(
    private readonly mobileCheckService: MobileCheckService,
    private readonly sideNavService: SideNavService
  ) {
  }

  public ngOnInit(): void {
    this.initMobileSub();
    this.initSideNavOpenedSub();
  }

  public ngAfterViewInit(): void {
    this.initSideNavToggleSub();
  }

  public ngOnDestroy(): void {
    this.subs.clear();
  }

  private initMobileSub(): void {
    const sub = this.mobileCheckService.isMobile.subscribe({
      next: value => {
        this.isMobile = value;
        if (this.isMobile) this.opened = false;
      }
    })
    this.subs.add(sub);
  }

  private initSideNavOpenedSub(): void {
    const sub = this.sideNavService.openedSubject.subscribe({
      next: opened => this.opened = opened
    });
    this.subs.add(sub);
  }


  private initSideNavToggleSub() {
    const sub = this.sideNavService.toggleSubject.subscribe({
      next: () => this.drawer?.toggle()
    });
    this.subs.add(sub);
  }
}
