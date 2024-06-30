import { Component } from '@angular/core';
import {LangService} from "../../services/lang.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent {

  constructor(public readonly langService: LangService) {
  }


}
