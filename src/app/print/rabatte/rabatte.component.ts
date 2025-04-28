import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-rabatte',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './rabatte.component.html',
    styleUrl: './rabatte.component.scss'
})
export class RabatteComponent {

  mengenstaffelSteps: any[] = [];
  malstaffelSteps: any[] = [];
  translationData = inject(TranslationService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.updateSteps(); // Initial aufrufen
    this.translationData.activeLang$.subscribe(() => {
      this.updateSteps(); // Automatische Aktualisierung bei Sprachwechsel
      this.cdr.detectChanges(); // View aktualisieren
    });
  }

  updateSteps() {
    this.mengenstaffelSteps = [
      { pages: '3 ' + this.getTranslation('PRINT.RABATTE.R3'), discount: 5 },
      { pages: '6 ' + this.getTranslation('PRINT.RABATTE.R3'), discount: 8 },
      { pages: '9 ' + this.getTranslation('PRINT.RABATTE.R3'), discount: 12 },
      { pages: '12 ' + this.getTranslation('PRINT.RABATTE.R3'), discount: 15 }
    ];
    this.malstaffelSteps = [
      { amount: '3x', discount: 3 },
      { amount: '6x', discount: 5 },
      { amount: '9x', discount: 7 },
      { amount: '12x', discount: 10 }
    ]
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }
}
