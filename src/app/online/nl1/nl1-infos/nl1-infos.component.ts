import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-nl1-infos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nl1-infos.component.html',
  styleUrl: './nl1-infos.component.scss'
})
export class Nl1InfosComponent {

  data = [
    { label: 'ONLINE.USER.ICON1', value: 86, color: '#b70d20' },
    { label: 'ONLINE.USER.ICON2', value: 70, color: '#b70d20' },
    { label: 'ONLINE.USER.ICON3', value: 46, color: '#b70d20' },
    { label: 'ONLINE.USER.ICON4', value: 28, color: '#b70d20' }
  ];

  topics1 = [
    { name: 'ONLINE.USER.ICON5', img: 'assets/img/icons/v.svg' },
    { name: 'ONLINE.USER.ICON6', img: 'assets/img/icons/i.svg' },
    { name: 'ONLINE.USER.ICON8', img: 'assets/img/icons/immo.svg' }, // Vermutlich anderes Icon für Immobilien
    { name: 'ONLINE.USER.ICON7', img: 'assets/img/icons/swa.svg' },
    { name: 'ONLINE.NL1.ZG1', img: 'assets/img/icons/finanzberater.svg' },
    { name: 'ONLINE.NL1.ZG2', img: 'assets/img/icons/sales.svg' },
    { name: 'ONLINE.NL1.ZG3', img: 'assets/img/icons/digitalisierung.svg' }, // Vermutlich anderes Icon für Immobilien
    { name: 'ONLINE.NL1.ZG4', img: 'assets/img/icons/recht.svg' }
  ];

  progress = this.data[0].value; // Standardmäßig auf Versicherungsvermittler (86%)
  selectedColor = this.data[0].color;
  totalLength = 283; // Maximale Länge des Kreises

  

  updateProgress(value: number, color: string) {
    this.progress = value;
    this.selectedColor = color;
  }

  getStrokeDashArray(value: number): string {
    const totalLength = 283;
    return `${(totalLength * value) / 100}, ${totalLength}`;
  }


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
