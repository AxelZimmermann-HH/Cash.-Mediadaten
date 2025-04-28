import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-leser',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './leser.component.html',
    styleUrl: './leser.component.scss'
})
export class LeserComponent {

  infoVisibleIndex: { [key: string]: number | null } = { zgElements: null, products: null, kpis1: null, kpis2: null };
  clickedIndex: { [key: string]: number | null } = { zgElements: null, products: null, kpis1: null, kpis2: null };

  @ViewChild('zgElement', { static: false }) zgElement!: ElementRef;

  zgElements = [
    {
      icon: 'assets/img/icons/fv2.png',
      titleKey: 'ONLINE.USER.ICON2',
      subtitleKey: 'ONLINE.USER.ICON2GEW',
      percent1: '77%',
    },
    {
      icon: 'assets/img/icons/vv2.png',
      titleKey: 'ONLINE.USER.ICON1',
      subtitleKey: 'ONLINE.USER.ICON1GEW',
      percent1: '75%',
    },
    {
      icon: 'assets/img/icons/iv2.png',
      titleKey: 'ONLINE.USER.ICON3',
      subtitleKey: 'ONLINE.USER.ICON3GEW',
      percent1: '47%',
    },
    {
      icon: 'assets/img/icons/im2.png',
      titleKey: 'ONLINE.USER.ICON4',
      subtitleKey: 'ONLINE.USER.ICON4GEW',
      percent1: '26%',
    }
  ];

  products = [
    {
      icon: 'assets/img/icons/v.svg',
      titleKey: 'ONLINE.USER.ICON5',
      percent1: '78%',
    },
    {
      icon: 'assets/img/icons/i.svg',
      titleKey: 'ONLINE.USER.ICON6',
      percent1: '78%',
    },
    {
      icon: 'assets/img/icons/swa.svg',
      titleKey: 'ONLINE.USER.ICON7',
      percent1: '61%',
    },
    {
      icon: 'assets/img/icons/immo.svg',
      titleKey: 'ONLINE.USER.ICON8',
      percent1: '41%',
    },
    {
      icon: 'assets/img/icons/gold.svg',
      titleKey: 'ONLINE.USER.ICON9',
      percent1: '25%',
    },
  ];

  kpis1 = [
    {
      icon: 'assets/img/siegel-print2.jpg',
      titleKey: 'PRINT.LESER.L6',
      subtitleKey: '',
      studies: 'PRINT.LESER.L11',
      infos: 'PRINT.LESER.L7'
    },
    {
      icon: 'assets/img/siegel-print1.jpg',
      titleKey: 'PRINT.LESER.L2',
      subtitleKey: '',
      studies: 'PRINT.LESER.L10',
      infos: 'PRINT.LESER.L5'
    },
    {
      icon: 'assets/img/siegel-print3.png',
      titleKey: 'PRINT.LESER.L2',
      subtitleKey: '',
      studies: 'PRINT.LESER.L9',
      infos: 'PRINT.LESER.L4'
    },
  ];

  kpis2 = [
    {
      icon: 'assets/img/siegel-print4.jpg',
      ivw: '',
      titleKey: 'PRINT.LESER.L2',
      subtitleKey: '',
      studies: 'PRINT.LESER.L12',
      infos: 'PRINT.LESER.L3',
      infos2: '',
      infos3: '',
      infos4: '',
    },
    {
      icon: 'assets/img/siegel-print5.jpg',
      ivw: '',
      titleKey: 'PRINT.LESER.L2',
      subtitleKey: '',
      studies: 'PRINT.LESER.L12',
      infos: 'PRINT.LESER.L3A',
      infos2: '',
      infos3: '',
      infos4: '',
    },
    {
      icon: 'assets/img/icons/coverage.svg',
      ivw: 'assets/img/ivw.png',
      titleKey: 'PRINT.LESER.L14',
      subtitleKey: 'PRINT.LESER.L13',
      studies: '',
      infos: 'PRINT.LESER.L16',
      infos2: 'PRINT.LESER.L17',
      infos3: 'PRINT.LESER.L18',
      infos4: 'PRINT.LESER.L19',
    },
  ]

  toggleInfoOverlay(index: number, type: 'zgElements' | 'products' | 'kpis1' | 'kpis2', event: Event) {
    event.stopPropagation();
    if (this.clickedIndex[type] === index) {
        this.clickedIndex[type] = null; // Schließen
    } else {
        this.clickedIndex[type] = index;
        this.infoVisibleIndex[type] = index; // Overlay bleibt offen
    }
  }

  showOverlay(index: number, type: 'zgElements' | 'products' | 'kpis1' | 'kpis2') {
    if (this.clickedIndex[type] === null) {
        this.infoVisibleIndex[type] = index; // Nur wenn kein Klick aktiv ist
    }
  }

  hideOverlay(index: number, type: 'zgElements' | 'products' | 'kpis1' | 'kpis2') {
    if (this.clickedIndex[type] !== index) {
        this.infoVisibleIndex[type] = null; // Nur schließen, wenn nicht geclickt
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
      this.clickedIndex = { zgElements: null, products: null, kpis1: null, kpis2: null };
      this.infoVisibleIndex = { zgElements: null, products: null, kpis1: null, kpis2: null };
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
