import { Injectable } from '@angular/core';
import { I18nService } from '@app/i18n';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private i18nService: I18nService) {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return dictionary[prefix + '-' + this.transformLanguage(this.i18nService.language)];
  }

  private transformLanguage(language: string): string {
    const splitted = language.split('-');
    return this.getUpdatedCountry(splitted[1].toUpperCase()) + splitted[0].toLowerCase();
  }

  private getUpdatedCountry(country: string): string {
    if (['IT', 'FR', 'ES', 'DE', 'GB'].includes(country)) {
      return 'EU';
    }
    return country;
  }
}
