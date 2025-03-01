import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogWebinarAdComponent } from './dialog-webinar-ad/dialog-webinar-ad.component';
import { DialogWebinarExtraComponent } from './dialog-webinar-extra/dialog-webinar-extra.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-webinar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss'
})
export class WebinarComponent {

  constructor (public dialog: MatDialog) {}
  
  openDialogAd() {
    this.dialog.open(DialogWebinarAdComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog', 
    });
  }

  openDialogExtra() {
    this.dialog.open(DialogWebinarExtraComponent, {
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
