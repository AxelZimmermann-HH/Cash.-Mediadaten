import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogNl1TopicsComponent } from './dialog-nl1-topics/dialog-nl1-topics.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-nl1-products',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './nl1-products.component.html',
  styleUrl: './nl1-products.component.scss'
})
export class Nl1ProductsComponent {

  newsletters = [
    { name: 'ONLINE.NL1.PRODUCT_MAIN', recipients: '10.300', frequency: 'ONLINE.NL1.PRODUCT_DAILY', time: 'ONLINE.NL1.PRODUCT_TIME1' },
    { name: 'ONLINE.NL1.AD_PRODUCT3', recipients: '10.300', frequency: 'ONLINE.NL1.PRODUCT_SAT', time: 'ONLINE.NL1.PRODUCT_TIME2' },
    { name: 'ONLINE.NL1.AD_PRODUCT4', recipients: '10.300', frequency: 'ONLINE.NL1.PRODUCT_MONTH', time: 'ONLINE.NL1.PRODUCT_TIME3' }
  ];

  constructor (public dialog: MatDialog) {};

  openDialogTopics() {
    this.dialog.open(DialogNl1TopicsComponent, {
          width: '98%',
          maxWidth: '600px',
          panelClass: 'custom-dialog', 
        });
  }

  isThemenNewsletter(name: string): boolean {
    return name === 'ONLINE.NL1.AD_PRODUCT4';
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
