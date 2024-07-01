import { Component } from '@angular/core';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {TranslateModule} from "@ngx-translate/core";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [
    TranslateModule,
    FaIconComponent
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  public succesIcon = faCheckCircle
}
