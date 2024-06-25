import { Component } from '@angular/core';
import {FilesInfos} from "./files-infos";
import {FileComponent} from "./file/file.component";
import {FileInfo} from "./file-info";

@Component({
  selector: 'app-files-manager',
  standalone: true,
  imports: [
    FileComponent
  ],
  templateUrl: './files-manager.component.html',
  styleUrl: './files-manager.component.scss'
})
export class FilesManagerComponent {
  public files: FileInfo[];

  constructor() {
    this.files = FilesInfos;
  }

}
