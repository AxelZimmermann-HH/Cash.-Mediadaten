import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMcbComponent } from './dialog-mcb/dialog-mcb.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {

  lines = Array(6);
  mcbText1 = Array(4);

  elements = {
    ad: {
      headline: 'ONLINE.CONTENT.MCB_AD1',
      text: 'ONLINE.CONTENT.MCB_AD2'
    },
    editorial: {
      headline: 'ONLINE.CONTENT.MCB_EDIT1',
      text: 'ONLINE.CONTENT.MCB_EDIT2'
    },
    extern: {
      headline: 'ONLINE.CONTENT.MCB_EXTERN1',
      text: 'ONLINE.CONTENT.MCB_EXTERN2'
    }
  }

  constructor (public dialog: MatDialog) {}

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
