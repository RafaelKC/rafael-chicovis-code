import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptop, faWindowMinimize, faXmark, faPlay, faStop, faBug } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public laptopIcon = faLaptop;
  public timesIcon = faXmark;
  public minimizeIcon = faWindowMinimize;
  public maximizeIcon = faWindowMaximize;
  public playIcon = faPlay;
  public stopIcon = faStop;
  public bugIcon = faBug;
  public angularIcon = faAngular;
}
