import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-specs',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './specs.component.html',
    styleUrl: './specs.component.scss'
})
export class SpecsComponent {

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
