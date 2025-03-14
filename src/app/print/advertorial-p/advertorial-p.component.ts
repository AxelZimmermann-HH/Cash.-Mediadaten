import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service'

@Component({
  selector: 'app-advertorial-p',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertorial-p.component.html',
  styleUrl: './advertorial-p.component.scss'
})
export class AdvertorialPComponent {

  linesMax = Array(12);
  linesS = Array(8);

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
