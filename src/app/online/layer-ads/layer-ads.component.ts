import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-layer-ads',
    imports: [],
    templateUrl: './layer-ads.component.html',
    styleUrl: './layer-ads.component.scss'
})
export class LayerAdsComponent {


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
