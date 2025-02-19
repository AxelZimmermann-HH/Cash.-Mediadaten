import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  infoVisibleIndex: { [key: string]: number | null } = { zgElements: null, products: null, kpis: null };
  clickedIndex: { [key: string]: number | null } = { zgElements: null, products: null, kpis: null };


  @ViewChild('zgElement', { static: false }) zgElement!: ElementRef;

  zgElements = [
    {
      icon: 'assets/img/icons/vv2.png',
      titleKey: 'ONLINE.USER.ICON1',
      subtitleKey: 'ONLINE.USER.ICON1GEW',
      percent1: '87%',
      percent2: '86%',
      percent3: '73%'
    },
    {
      icon: 'assets/img/icons/fv2.png',
      titleKey: 'ONLINE.USER.ICON2',
      subtitleKey: 'ONLINE.USER.ICON2GEW',
      percent1: '71%',
      percent2: '70%',
      percent3: '82%'
    },
    {
      icon: 'assets/img/icons/iv2.png',
      titleKey: 'ONLINE.USER.ICON3',
      subtitleKey: 'ONLINE.USER.ICON3GEW',
      percent1: '44%',
      percent2: '46%',
      percent3: '55%'
    },
    {
      icon: 'assets/img/icons/im2.png',
      titleKey: 'ONLINE.USER.ICON4',
      subtitleKey: 'ONLINE.USER.ICON4GEW',
      percent1: '26%',
      percent2: '28%',
      percent3: '41%'
    }
  ];

  products = [
    {
      icon: 'assets/img/icons/v.svg',
      titleKey: 'ONLINE.USER.ICON5',
      percent1: '89%',
      percent2: '88%',
      percent3: '73%'
    },
    {
      icon: 'assets/img/icons/i.svg',
      titleKey: 'ONLINE.USER.ICON6',
      percent1: '73%',
      percent2: '73%',
      percent3: '77%'
    },
    {
      icon: 'assets/img/icons/swa.svg',
      titleKey: 'ONLINE.USER.ICON7',
      percent1: '48%',
      percent2: '45%',
      percent3: '59%'
    },
    {
      icon: 'assets/img/icons/immo.svg',
      titleKey: 'ONLINE.USER.ICON8',
      percent1: '45%',
      percent2: '45%',
      percent3: '59%'
    },
    {
      icon: 'assets/img/icons/gold.svg',
      titleKey: 'ONLINE.USER.ICON9',
      percent1: '25%',
      percent2: '29%',
      percent3: '19%'
    },
  ];

  kpis = [
    {
      icon: 'assets/img/icons/pi.png',
      titleKey: 'ONLINE.USER.ICON10',
      subtitleKey: 'ONLINE.USER.ICON10SUB',
      number: '245.232',
      source: 'IVW Januar 2023'
    },
    {
      icon: 'assets/img/icons/visits.png',
      titleKey: 'ONLINE.USER.ICON11',
      subtitleKey: 'ONLINE.USER.ICON10SUB',
      number: '170.384',
      source: 'IVW Januar 2023'
    },
    {
      icon: 'assets/img/icons/user.png',
      titleKey: 'ONLINE.USER.ICON12',
      subtitleKey: 'ONLINE.USER.ICON10SUB',
      number: '245.232',
      source: 'Google Analytics'
    },
    {
      icon: 'assets/img/icons/nl.png',
      titleKey: 'ONLINE.USER.ICON13',
      subtitleKey: 'ONLINE.USER.ICON13SUB',
      number: '10.300',
      source: ''
    },
    {
      icon: 'assets/img/icons/nl.png',
      titleKey: 'ONLINE.USER.ICON13',
      subtitleKey: 'ONLINE.USER.ICON14SUB',
      number: '13.000',
      source: ''
    },
  ];

  toggleInfoOverlay(index: number, type: 'zgElements' | 'products' | 'kpis', event: Event) {
    event.stopPropagation();
    if (this.clickedIndex[type] === index) {
        this.clickedIndex[type] = null; // Schließen
    } else {
        this.clickedIndex[type] = index;
        this.infoVisibleIndex[type] = index; // Overlay bleibt offen
    }
  }

  showOverlay(index: number, type: 'zgElements' | 'products' | 'kpis') {
    if (this.clickedIndex[type] === null) {
        this.infoVisibleIndex[type] = index; // Nur wenn kein Klick aktiv ist
    }
  }

  hideOverlay(index: number, type: 'zgElements' | 'products' | 'kpis') {
    if (this.clickedIndex[type] !== index) {
        this.infoVisibleIndex[type] = null; // Nur schließen, wenn nicht geclickt
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
      this.clickedIndex = { zgElements: null, products: null, kpis: null };
      this.infoVisibleIndex = { zgElements: null, products: null, kpis: null };
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
