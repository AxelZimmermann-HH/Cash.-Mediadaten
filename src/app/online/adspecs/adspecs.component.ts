import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-adspecs',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './adspecs.component.html',
    styleUrl: './adspecs.component.scss'
})
export class AdspecsComponent {

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
