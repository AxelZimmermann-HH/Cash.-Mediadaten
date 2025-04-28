import { Component, inject, Inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-dialog-exklusiv',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './dialog-exklusiv.component.html',
    styleUrl: './dialog-exklusiv.component.scss'
})
export class DialogExklusivComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: any[] }, public dialogRef: MatDialogRef<DialogExklusivComponent>) {}

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
