import {HeaderComponent} from "./header/header.component";
import {FilesManagerComponent} from "./files-manager/files-manager.component";
import {SideActionsComponent} from "./side-actions/side-actions.component";
import {ContentComponent} from "./content/content.component";
import {Component, HostListener, OnInit} from "@angular/core";
import {LangService} from "./services/lang.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FilesManagerComponent,
    SideActionsComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private langService: LangService) {
  }

  public ngOnInit() {
    this.langService.setUserLang()
  }
}
