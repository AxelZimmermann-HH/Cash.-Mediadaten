import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogExklusivComponent } from './dialog-exklusiv/dialog-exklusiv.component';

@Component({
  selector: 'app-exklusiv',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './exklusiv.component.html',
  styleUrl: './exklusiv.component.scss'
})
export class ExklusivComponent {


  constructor (public dialog: MatDialog) {}

  openDialog(dataType: 'elements' | 'print' | 'online' | 'video') {
    let dataToSend;
  
    if (dataType === 'elements') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E9') },
        { p1: this.getTranslation('PRINT.EXKLUSIV.E10') },
        { p2: this.getTranslation('PRINT.EXKLUSIV.E11') },
        { p3: this.getTranslation('PRINT.EXKLUSIV.E12') }
      ];
    } else if (dataType === 'print') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E13') },
        { p1: this.getTranslation('PRINT.EXKLUSIV.E14') },
        { p2: this.getTranslation('PRINT.EXKLUSIV.E15') }
      ];;
    } else if (dataType === 'online') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E16') },
        { p1: this.getTranslation('PRINT.EXKLUSIV.E17') },
        { p2: this.getTranslation('PRINT.EXKLUSIV.E18') },
        { p3: this.getTranslation('PRINT.EXKLUSIV.E19') },
        { p4: this.getTranslation('PRINT.EXKLUSIV.E20') },
      ];;
    } else if (dataType === 'video') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E21') },
        { p1: this.getTranslation('PRINT.EXKLUSIV.E22') },
      ];;
    }

  
  
    this.dialog.open(DialogExklusivComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog',
      data: { content: dataToSend }
    });
  }

  linesMax = Array(15);
  linesLess = Array(10);

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
