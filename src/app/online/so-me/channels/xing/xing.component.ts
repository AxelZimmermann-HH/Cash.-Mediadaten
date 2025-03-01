import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogXingComponent } from './dialog-xing/dialog-xing.component';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  selector: 'app-xing',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './xing.component.html',
  styleUrl: './xing.component.scss'
})
export class XingComponent {

  constructor (public dialog: MatDialog) {}
  
  openDialog() {
      this.dialog.open(DialogXingComponent, {
        width: '98%',
        maxWidth: '600px',
        panelClass: 'custom-dialog', 
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
