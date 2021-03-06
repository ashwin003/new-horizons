import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { Logger } from '@shared';
import deDE from '../../translations/de-DE.json';
import enUS from '../../translations/en-US.json';
import enGB from '../../translations/en-GB.json';
import esES from '../../translations/es-ES.json';
import frFR from '../../translations/fr-FR.json';
import itIT from '../../translations/it-IT.json';
import jaJP from '../../translations/ja-JP.json';
import koKR from '../../translations/ko-KR.json';
import zhCN from '../../translations/zh-CN.json';
import zhTW from '../../translations/zh-TW.json';

const log = new Logger('I18nService');
const languageKey = 'language';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {
    // Embed languages to avoid extra HTTP requests
    translateService.setTranslation('de-DE', deDE);
    translateService.setTranslation('en-GB', enGB);
    translateService.setTranslation('en-US', enUS);
    translateService.setTranslation('es-ES', esES);
    translateService.setTranslation('fr-FR', frFR);
    translateService.setTranslation('it-IT', itIT);
    translateService.setTranslation('ja-JP', jaJP);
    translateService.setTranslation('ko-KR', koKR);
    translateService.setTranslation('zh-CN', zhCN);
    translateService.setTranslation('zh-TW', zhTW);
  }

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param defaultLanguage The default language to use.
   * @param supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    // Warning: this subscription will always be alive for the app's lifetime
    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }

  /**
   * Cleans up language change subscription.
   */
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param language The IETF language code to set.
   */
  set language(language: string) {
    if (!language) {
      if (localStorage.getItem(languageKey)) {
        language = localStorage.getItem(languageKey)!;
      } else if (this.translateService.getBrowserCultureLang()) {
        language = this.translateService.getBrowserCultureLang()!;
      }
    }

    let isSupportedLanguage = this.supportedLanguages.includes(language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find((supportedLanguage) => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }
}
