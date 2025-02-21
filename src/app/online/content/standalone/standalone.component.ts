import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss'
})
export class StandaloneComponent {


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
