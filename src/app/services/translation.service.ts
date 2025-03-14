import { Injectable } from '@angular/core';
import { translations } from '../translations/translations';
import { TranslationStructure } from '../models/translation.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { en: TranslationStructure; de: TranslationStructure } = translations;
  private currentLanguage: 'en' | 'de' = 'de';
  private currentLanguageSubject = new BehaviorSubject<'en' | 'de'>('de'); // Standard: Deutsch
  activeLang$ = this.currentLanguageSubject.asObservable();

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguageSubject.next(lang);
  }

  getTranslation(key: string): any {
    const lang = this.currentLanguageSubject.getValue(); // Immer aktuelle Sprache holen
    return key.split('.').reduce((o: any, i) => o?.[i], this.translations[lang]);
  }

  getCurrentLanguage(): 'en' | 'de' {
    return this.currentLanguageSubject.getValue(); // Aktuelle Sprache synchron abrufen
  }
}
