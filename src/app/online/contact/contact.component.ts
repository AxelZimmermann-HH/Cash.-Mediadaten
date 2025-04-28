import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

  activeCategory = 'sales';

  contactsSales = [
    {
      img: "assets/img/foto_ar3.jpeg",
      name: "Andreas Rullmann",
      position1: "Head of Media Sales",
      position2: "",
      phone: "+49 69/348683-701",
      fax: "+49 40/51444-120",
      email: "rullmann@cash-online.de"
    },
    {
      img: "assets/img/foto_ag3.jpg",
      name: "Anya Geest",
      position1: "Senior Key Account Management",
      position2: "Mediasales Print + Online",
      phone: "+49 40/51444-195",
      fax: "+49 40/51444-120",
      email: "geest@cash-online.de"
    },
    {
      img: "assets/img/foto_br3.JPG",
      name: "Benjamin Radeke",
      position1: "Key Account Management",
      position2: "Mediasales Print + Online",
      phone: "+49 40/51444-210",
      fax: "+49 40/51444-120",
      email: "radeke@cash-online.de"
    }
  ];

  contactsMedia = [
    {
      img: "assets/img/foto_uz2.jpg",
      name: "Ulli Zimmermann",
      position1: "",
      position2: "",
      phone: "+49 40/51444-301",
      fax: "+49 40/51444-120",
      email: " u.zimmermann@cash-online.de"
    },
    {
      img: "assets/img/foto_az.jpg",
      name: "Axel Zimmermann",
      position1: "",
      position2: "",
      phone: "+49 40/51444-101",
      fax: "+49 40/51444-120",
      email: " a.zimmermann@cash-online.de"
    }
  ];

  contactsDispo = [
    {
      img: "assets/img/foto_gl.jpg",
      name: "Gerhard Langstein",
      position1: "Geschäftsführer",
      position2: "",
      phone: "+49 40/51444-200",
      fax: "+49 40/51444-120",
      email: "langstein@cash-online.de"
    },
    {
      img: "assets/img/foto_jn.JPG",
      name: "Josephine Noack",
      position1: "Disponentin",
      position2: "",
      phone: "+49 40/51444-164",
      fax: "+49 40/51444-120",
      email: "babur@cash-online.de"
    }
  ]

  setCategory(category: string) {
    this.activeCategory = category;
  }

  get contacts() {
    switch (this.activeCategory) {
      case 'sales':
        return this.contactsSales;
      case 'media':
        return this.contactsMedia;
      case 'dispo':
        return this.contactsDispo;
      default:
        return [];
    }
  }

  get showInfo(): boolean {
    return this.activeCategory === 'info';
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
