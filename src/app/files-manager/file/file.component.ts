import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FileInfo} from "../file-info";
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {faFolderOpen, faFolderClosed} from "@fortawesome/free-solid-svg-icons";
import {NgClass, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MobileCheckService} from "../../services/mobile-check.service";
import {SideNavService} from "../../services/side-nav.service";
import {first} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass,
    NgStyle,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent implements OnChanges{
  @Input() public file?: FileInfo;

  public opened: boolean = false;
  public folderIcon: IconDefinition = faFolderClosed;

  constructor(
    private readonly mobileCheckService: MobileCheckService,
    private readonly sideNavService: SideNavService
  ) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.opened = this.file?.defaultOpened ?? false;
    this.folderIcon = this.opened ? faFolderOpen : faFolderClosed;
  }

  public doAction(): void {
    this.opened = !this.opened;
    this.folderIcon = this.opened ? faFolderOpen : faFolderClosed;

    if (!this.file?.folder && this.file?.endpoint != null) {
      this.mobileCheckService.isMobile
        .pipe(first()).subscribe({
        next: mobile => {
          if (mobile) this.sideNavService.close()
        }
      })
    }
  }
}
