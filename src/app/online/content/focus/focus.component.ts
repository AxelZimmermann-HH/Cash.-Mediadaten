import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMcbComponent } from '../box/dialog-mcb/dialog-mcb.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-focus',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss'
})
export class FocusComponent {

  lines = Array(4);
  lines2 = Array(4);
  columnAds = Array(2);

  constructor (public dialog: MatDialog) {}

  elements = {
    header: {
      headline: 'ONLINE.CONTENT.UIF_H1',
      text: 'ONLINE.CONTENT.UIF_H2'
    },
    mainPoints: {
      headline: 'ONLINE.CONTENT.UIF_M1',
      text: 'ONLINE.CONTENT.UIF_M2'
    },
    news: {
      headline: 'ONLINE.CONTENT.UIF_N1',
      text: 'ONLINE.CONTENT.UIF_N2'
    }
  }
  
    openDialog(ad: any) {
      this.dialog.open(DialogMcbComponent, {
        width: '98%',
        maxWidth: '600px',
        panelClass: 'custom-dialog', 
        data: ad 
      });
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
