import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogVideoComponent } from './dialog-video/dialog-video.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {

  constructor (public dialog: MatDialog) {}

  openDialog() {
      this.dialog.open(DialogVideoComponent, {
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
