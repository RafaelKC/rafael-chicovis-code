import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {SubscriptionManager} from "../tokens/subscription-manager";
import {TerminalService} from "../services/terminal.service";

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent implements OnInit, OnDestroy {
  public opened = true;

  private subs = new SubscriptionManager();

  constructor(private terminalService: TerminalService) {
  }

  public ngOnInit(): void {
    this.initTerminalSubs();
  }

  public ngOnDestroy(): void {
    this.subs.clear();
  }

  private initTerminalSubs(): void {
    const openSub = this.terminalService.shouldOpen.subscribe({
      next: (opened) => this.opened = opened
    });
    const toggleSub = this.terminalService.shouldToggle.subscribe({
      next: () => this.opened = !this.opened
    });

    this.subs.add(openSub);
    this.subs.add(toggleSub);
  }
}
