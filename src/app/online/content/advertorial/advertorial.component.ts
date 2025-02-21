import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-advertorial',
  standalone: true,
  imports: [],
  templateUrl: './advertorial.component.html',
  styleUrl: './advertorial.component.scss'
})
export class AdvertorialComponent {


  translationData = inject(TranslationService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  
  }
}
