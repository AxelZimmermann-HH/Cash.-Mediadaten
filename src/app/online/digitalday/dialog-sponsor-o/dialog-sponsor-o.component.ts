import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sponsor-o',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './dialog-sponsor-o.component.html',
  styleUrl: './dialog-sponsor-o.component.scss'
})
export class DialogSponsorOComponent {

  constructor(public dialogRef: MatDialogRef<DialogSponsorOComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
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
