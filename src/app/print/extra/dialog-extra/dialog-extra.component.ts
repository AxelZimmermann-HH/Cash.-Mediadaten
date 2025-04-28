import { Component, inject, Inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-extra',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './dialog-extra.component.html',
    styleUrl: './dialog-extra.component.scss'
})
export class DialogExtraComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: any[] }, public dialogRef: MatDialogRef<DialogExtraComponent>) {}

  getHeadline2(): string | undefined {
    return this.data.content.find(item => item.headline2)?.headline2;
  }

  getHeadline2Index(): number {
    return this.data.content.findIndex(item => item.headline2);
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
