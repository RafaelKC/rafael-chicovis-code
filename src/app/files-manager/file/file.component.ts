import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FileInfo} from "../file-info";
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {faFolderOpen, faFolderClosed} from "@fortawesome/free-solid-svg-icons";
import {NgClass, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass,
    NgStyle,
    RouterLink
  ],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent implements OnChanges{
  @Input() public file?: FileInfo;

  public opened: boolean = false;
  public folderIcon: IconDefinition = faFolderClosed;

  public ngOnChanges(changes: SimpleChanges): void {
    this.opened = this.file?.defaultOpened ?? false;
    this.folderIcon = this.opened ? faFolderOpen : faFolderClosed;
  }

  public changeOpen(): void {
    this.opened = !this.opened;
    this.folderIcon = this.opened ? faFolderOpen : faFolderClosed;
  }
}
