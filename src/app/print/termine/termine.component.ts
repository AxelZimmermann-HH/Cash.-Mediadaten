import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogAusgabeComponent } from './dialog-ausgabe/dialog-ausgabe.component';

@Component({
    selector: 'app-termine',
    imports: [MatButtonModule, CommonModule, MatIconModule],
    templateUrl: './termine.component.html',
    styleUrl: './termine.component.scss'
})
export class TermineComponent {

  terminData: any = {};

  constructor (public dialog: MatDialog) {}

  ngOnInit() {
    this.updateTerminData();
  }
  
  openDialog2(dataType: 'elements' | 'print' | 'online' | 'video') {
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
  
    this.dialog.open(DialogAusgabeComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog',
      data: { content: dataToSend }
    });
  }

  openDialog(terminKey: string) {
    const dataToSend = {
      erstverkaufstag: this.getTranslation(`PRINT.TERMINE.${terminKey}B`),
      topics: [
        { title: this.getTranslation(`PRINT.TOPICS.${terminKey}VH`), text: this.getTranslation(`PRINT.TOPICS.${terminKey}V`) },
        { title: this.getTranslation(`PRINT.TOPICS.${terminKey}IH`), text: this.getTranslation(`PRINT.TOPICS.${terminKey}I`) },
        { title: this.getTranslation(`PRINT.TOPICS.${terminKey}FH`), text: this.getTranslation(`PRINT.TOPICS.${terminKey}F`) },
        { title: this.getTranslation(`PRINT.TOPICS.${terminKey}SH`), text: this.getTranslation(`PRINT.TOPICS.${terminKey}S`) },
      ]
  };

    this.dialog.open(DialogAusgabeComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog',
      data: { content: dataToSend, contentKey: terminKey }
    });
}

  updateTerminData() {
    this.terminData = {
      '2/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A2B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A2VH'), text: this.getTranslation('PRINT.TOPICS.A2V') },
          { title: this.getTranslation('PRINT.TOPICS.A2IH'), text: this.getTranslation('PRINT.TOPICS.A2I') },
          { title: this.getTranslation('PRINT.TOPICS.A2FH'), text: this.getTranslation('PRINT.TOPICS.A2F') },
          { title: this.getTranslation('PRINT.TOPICS.A2SH'), text: this.getTranslation('PRINT.TOPICS.A2S') },
        ]
      },
      '3/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A3B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A3VH'), text: this.getTranslation('PRINT.TOPICS.A3V') },
          { title: this.getTranslation('PRINT.TOPICS.A3IH'), text: this.getTranslation('PRINT.TOPICS.A3I') },
          { title: this.getTranslation('PRINT.TOPICS.A3FH'), text: this.getTranslation('PRINT.TOPICS.A3F') },
          { title: this.getTranslation('PRINT.TOPICS.A3SH'), text: this.getTranslation('PRINT.TOPICS.A3S') },
        ]
      },
      '4/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A4B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A4VH'), text: this.getTranslation('PRINT.TOPICS.A4V') },
          { title: this.getTranslation('PRINT.TOPICS.A4IH'), text: this.getTranslation('PRINT.TOPICS.A4I') },
          { title: this.getTranslation('PRINT.TOPICS.A4FH'), text: this.getTranslation('PRINT.TOPICS.A4F') },
          { title: this.getTranslation('PRINT.TOPICS.A4SH'), text: this.getTranslation('PRINT.TOPICS.A4S') },
        ]
      },
      '5/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A5B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A5VH'), text: this.getTranslation('PRINT.TOPICS.A5V') },
          { title: this.getTranslation('PRINT.TOPICS.A5IH'), text: this.getTranslation('PRINT.TOPICS.A5I') },
          { title: this.getTranslation('PRINT.TOPICS.A5FH'), text: this.getTranslation('PRINT.TOPICS.A5F') },
          { title: this.getTranslation('PRINT.TOPICS.A5SH'), text: this.getTranslation('PRINT.TOPICS.A5S') },
        ]
      },
      '6/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A6B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A6VH'), text: this.getTranslation('PRINT.TOPICS.A6V') },
          { title: this.getTranslation('PRINT.TOPICS.A6IH'), text: this.getTranslation('PRINT.TOPICS.A6I') },
          { title: this.getTranslation('PRINT.TOPICS.A6FH'), text: this.getTranslation('PRINT.TOPICS.A6F') },
          { title: this.getTranslation('PRINT.TOPICS.A6SH'), text: this.getTranslation('PRINT.TOPICS.A6S') },
        ]
      },
      '7/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A7B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A7VH'), text: this.getTranslation('PRINT.TOPICS.A7V') },
          { title: this.getTranslation('PRINT.TOPICS.A7IH'), text: this.getTranslation('PRINT.TOPICS.A7I') },
          { title: this.getTranslation('PRINT.TOPICS.A7FH'), text: this.getTranslation('PRINT.TOPICS.A7F') },
          { title: this.getTranslation('PRINT.TOPICS.A7SH'), text: this.getTranslation('PRINT.TOPICS.A7S') },
        ]
      },
      '8/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A8B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A8VH'), text: this.getTranslation('PRINT.TOPICS.A8V') },
          { title: this.getTranslation('PRINT.TOPICS.A8IH'), text: this.getTranslation('PRINT.TOPICS.A8I') },
          { title: this.getTranslation('PRINT.TOPICS.A8FH'), text: this.getTranslation('PRINT.TOPICS.A8F') },
          { title: this.getTranslation('PRINT.TOPICS.A8SH'), text: this.getTranslation('PRINT.TOPICS.A8S') },
        ]
      },
      '9/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A9B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A9VH'), text: this.getTranslation('PRINT.TOPICS.A9V') },
          { title: this.getTranslation('PRINT.TOPICS.A9IH'), text: this.getTranslation('PRINT.TOPICS.A9I') },
          { title: this.getTranslation('PRINT.TOPICS.A9FH'), text: this.getTranslation('PRINT.TOPICS.A9F') },
          { title: this.getTranslation('PRINT.TOPICS.A9SH'), text: this.getTranslation('PRINT.TOPICS.A9S') },
        ]
      },
      '10/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A10B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A10VH'), text: this.getTranslation('PRINT.TOPICS.A10V') },
          { title: this.getTranslation('PRINT.TOPICS.A10IH'), text: this.getTranslation('PRINT.TOPICS.A10I') },
          { title: this.getTranslation('PRINT.TOPICS.A10FH'), text: this.getTranslation('PRINT.TOPICS.A10F') },
          { title: this.getTranslation('PRINT.TOPICS.A10SH'), text: this.getTranslation('PRINT.TOPICS.A10S') },
        ]
      },
      '11/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A11B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A11VH'), text: this.getTranslation('PRINT.TOPICS.A11V') },
          { title: this.getTranslation('PRINT.TOPICS.A11IH'), text: this.getTranslation('PRINT.TOPICS.A11I') },
          { title: this.getTranslation('PRINT.TOPICS.A11FH'), text: this.getTranslation('PRINT.TOPICS.A11F') },
          { title: this.getTranslation('PRINT.TOPICS.A11SH'), text: this.getTranslation('PRINT.TOPICS.A11S') },
        ]
      },
      '12/2025': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A12B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A12VH'), text: this.getTranslation('PRINT.TOPICS.A12V') },
          { title: this.getTranslation('PRINT.TOPICS.A12IH'), text: this.getTranslation('PRINT.TOPICS.A12I') },
          { title: this.getTranslation('PRINT.TOPICS.A12FH'), text: this.getTranslation('PRINT.TOPICS.A12F') },
          { title: this.getTranslation('PRINT.TOPICS.A12SH'), text: this.getTranslation('PRINT.TOPICS.A12S') },
        ]
      },
      '1/2026': {
        erstverkaufstag: this.getTranslation('PRINT.TERMINE.A1B'),
        topics: [
          { title: this.getTranslation('PRINT.TOPICS.A1VH'), text: this.getTranslation('PRINT.TOPICS.A1V') },
          { title: this.getTranslation('PRINT.TOPICS.A1IH'), text: this.getTranslation('PRINT.TOPICS.A1I') },
          { title: this.getTranslation('PRINT.TOPICS.A1FH'), text: this.getTranslation('PRINT.TOPICS.A1F') },
          { title: this.getTranslation('PRINT.TOPICS.A1SH'), text: this.getTranslation('PRINT.TOPICS.A1S') },
        ]
      },
    };
  }

  translationData = inject(TranslationService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  
    this.updateTerminData();
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  
  }

}
