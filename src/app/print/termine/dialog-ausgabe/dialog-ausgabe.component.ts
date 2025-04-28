import { Component, inject, Inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-ausgabe',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './dialog-ausgabe.component.html',
    styleUrl: './dialog-ausgabe.component.scss'
})
export class DialogAusgabeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: any; contentKey: string }, public dialogRef: MatDialogRef<DialogAusgabeComponent>) {

  }

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
