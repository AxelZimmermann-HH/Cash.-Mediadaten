import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-auszeichnungen',
    standalone: true,
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './auszeichnungen.component.html',
    styleUrl: './auszeichnungen.component.scss'
})
export class AuszeichnungenComponent {

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
