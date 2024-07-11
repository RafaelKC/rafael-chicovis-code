import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import { faTelegram, faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {NgTemplateOutlet} from "@angular/common";
import {LangService} from "../../../services/lang.service";
import {SubscriptionManager} from "../../../tokens/subscription-manager";

type ContactInfo = {
  icon: IconDefinition;
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    FaIconComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  public infos: ContactInfo[] = [
    {
      description: '@RafaelChicovis',
      icon: faTelegram,
      title: 'Telegram',
      url: 'https://t.me/RafaelChicovis'
    },
    {
      description: '+55 (41) 99142-1020',
      icon: faWhatsapp,
      title: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=5541991421020'
    },
    {
      description: 'Rafael Chicovis',
      icon: faLinkedin,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rafael-kaua-chicovis/'
    },
    {
      description: 'RafaelKC',
      icon: faGithub,
      title: 'GitHub',
      url: 'https://github.com/RafaelKC'
    },
    {
      description: 'contato.rafael.chicovis@gmail.com',
      icon: faEnvelope,
      title: 'Email',
      url: 'mailto:contato.rafael.chicovis@gmail.com'
    },
  ];

  public subs = new SubscriptionManager();

  constructor(private langService: LangService) {
    this.setUrlsLangs();
    this.initSubs();
  }

  public templateClicked(event: MouseEvent, url: string): void {
    event.preventDefault();
    event.stopImmediatePropagation();

    window.open(url, "_blank");
  }

  private setUrlsLangs(): void {
    if (this.langService.currentLang == 'en') {
      this.infos[2].url = 'https://www.linkedin.com/in/rafael-kaua-chicovis/?locale=en_US';
    } else {
      this.infos[2].url = 'https://www.linkedin.com/in/rafael-kaua-chicovis';
    }
  }

  private initSubs(): void {
    const subs = this.langService.langChanged.subscribe({
      next: this.setUrlsLangs.bind(this)
    });
    this.subs.add(subs);
  }
}
