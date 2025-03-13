import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogExtraComponent } from './dialog-extra/dialog-extra.component';

@Component({
  selector: 'app-extra',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.scss'
})
export class ExtraComponent {

  linesMax = Array(15);
  linesLess = Array(10);

  constructor (public dialog: MatDialog) {}

  isBookletVisible = true; // Startwert: sichtbar

  toggleBooklet() {
    this.isBookletVisible = !this.isBookletVisible; // Ein-/Ausblenden
  }

  openDialog(dataType: 'elements' | 'print' | 'online' | 'video') {
    let dataToSend;
  
    if (dataType === 'elements') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXTRA.E4') },
        { p1: this.getTranslation('PRINT.EXKLUSIV.E10') },
        { p2: this.getTranslation('PRINT.EXTRA.E5') },
        { p3: this.getTranslation('PRINT.EXKLUSIV.E12') },
        { p4: this.getTranslation('PRINT.EXTRA.E6') },
      ];
    } else if (dataType === 'print') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E13') },
        { p1: this.getTranslation('PRINT.EXTRA.E7') },
        { p2: this.getTranslation('PRINT.EXKLUSIV.E14') },
        { p3: this.getTranslation('PRINT.EXKLUSIV.E15') }
      ];;
    } else if (dataType === 'online') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E16') },
        { p1: this.getTranslation('PRINT.EXKLUSIV.E17') },
        { p2: this.getTranslation('PRINT.EXKLUSIV.E18') },
        { p3: this.getTranslation('PRINT.EXKLUSIV.E19') },
        { p4: this.getTranslation('PRINT.EXKLUSIV.E20') },
        { headline2: this.getTranslation('PRINT.EXTRA.E8') },
        { p5: '40.000 Ad Impressions' },
        { p6: this.getTranslation('PRINT.EXKLUSIV.E18') },
        { p7: this.getTranslation('PRINT.EXKLUSIV.E19') },
      ];
    } else if (dataType === 'video') {
      dataToSend = [
        { headline: this.getTranslation('PRINT.EXKLUSIV.E21') },
        { p1: this.getTranslation('PRINT.EXTRA.E10') },
        { p2: this.getTranslation('PRINT.EXTRA.E11') },
      ];;
    }
  
    this.dialog.open(DialogExtraComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog',
      data: { content: dataToSend }
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
