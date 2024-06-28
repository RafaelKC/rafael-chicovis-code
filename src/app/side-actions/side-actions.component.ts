import { Component } from '@angular/core';
import {faCodeBranch, faCodeCommit, faFolderClosed, faTerminal} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {SideNavService} from "../services/side-nav.service";
import {TerminalService} from "../services/terminal.service";

@Component({
  selector: 'app-side-actions',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './side-actions.component.html',
  styleUrl: './side-actions.component.scss'
})
export class SideActionsComponent {
  public readonly folderIcon = faFolderClosed;
  public readonly gitIcon = faCodeCommit;
  public readonly terminalIcon = faTerminal;
  public readonly codeBranchIcon = faCodeBranch;

  constructor(
    private readonly sideNavService: SideNavService,
    private readonly terminalService: TerminalService) {
  }

  public toggleSidNave(): void {
    this.sideNavService.toggle();
  }

  public toggleTerminal(): void {
    this.terminalService.toggle();
  }
}
