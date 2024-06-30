import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  public readonly avaliableLangs = ['pt', 'en'];

  private readonly USER_LANG_STORAGE_KEY = 'user-lang';
  private userLang= '';

  constructor(
    private readonly translateService: TranslateService,
    ) {
  }

  public get currentLang(): string {
    return this.userLang;
  }

  public setLang(lang: string): void {
    if (this.avaliableLangs.includes(lang)) {
      this.userLang = lang;
      localStorage.setItem(this.USER_LANG_STORAGE_KEY, this.userLang);
      this.translateService.use(this.userLang);
    }
  }

  public setUserLang() {
    this.userLang = localStorage.getItem(this.USER_LANG_STORAGE_KEY) as string;
    if (this.userLang == null || this.userLang == '') {
      const browserLang = this.getBrowserLanguage();
      try {
        this.userLang = browserLang != null ? browserLang.split('-')[0] : '';
        if (!this.avaliableLangs.includes(this.userLang)) this.userLang = 'en';
      }
      catch (e) {
        console.error('Can\'t set user lang.');
      }
    }
    if (this.userLang != null && this.userLang != '') {
      this.translateService.use(this.userLang);
    } else {
      this.translateService.use('en');
    }
  }

  private getBrowserLanguage(): string {
    return navigator.language || (navigator.languages && navigator.languages[0]);
  }
}
