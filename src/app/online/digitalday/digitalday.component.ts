import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { DialogSponsorPComponent } from './dialog-sponsor-p/dialog-sponsor-p.component';
import { DialogSponsorOComponent } from './dialog-sponsor-o/dialog-sponsor-o.component';
import { DialogBreakoutOComponent } from './dialog-breakout-o/dialog-breakout-o.component';
import { DialogBreakoutPComponent } from './dialog-breakout-p/dialog-breakout-p.component';

@Component({
    selector: 'app-digitalday',
    standalone: true,
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './digitalday.component.html',
    styleUrl: './digitalday.component.scss'
})
export class DigitaldayComponent {

  constructor (public dialog: MatDialog) {}
    
    openDialogSponsorPrint() {
      this.dialog.open(DialogSponsorPComponent, {
        width: '98%',
        maxWidth: '600px',
        panelClass: 'custom-dialog', 
      });
    }
  
    openDialogSponsorOnline() {
      this.dialog.open(DialogSponsorOComponent, {
        width: '98%',
        maxWidth: '600px',
        panelClass: 'custom-dialog', 
      });
    }

    openDialogBreakoutPrint() {
      this.dialog.open(DialogBreakoutPComponent, {
        width: '98%',
        maxWidth: '600px',
        panelClass: 'custom-dialog', 
      });
    }

    openDialogBreakoutOnline() {
      this.dialog.open(DialogBreakoutOComponent, {
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
