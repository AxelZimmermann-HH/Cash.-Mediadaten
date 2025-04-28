import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

import { TranslationService } from '../services/translation.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-title',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatButtonToggleModule, MatIconModule, RouterModule],
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss'
})
export class TitleComponent {

  translationData = inject(TranslationService);
  activeLang: 'en' | 'de' = this.translationData.getCurrentLanguage();

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  
  }

}
