import { Injectable } from '@angular/core';
import { translations } from '../translations/translations';
import { TranslationStructure } from '../models/translation.interface';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { en: TranslationStructure; de: TranslationStructure } = translations;
  private currentLanguage: 'en' | 'de' = 'de';

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage = lang;
  }

  getTranslation(key: string): any {
    return key.split('.').reduce((o: any, i) => o?.[i], this.translations[this.currentLanguage]);
  }

  getCurrentLanguage(): 'en' | 'de' {
    return this.currentLanguage;
  }
}
