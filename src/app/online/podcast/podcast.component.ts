import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogSpecialComponent } from './dialog-special/dialog-special.component';
import { DialogSponsorComponent } from './dialog-sponsor/dialog-sponsor.component';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent {

  constructor (public dialog: MatDialog) {}

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  toggleAudio(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    const audioElement = this.audio.nativeElement;
    if (!audioElement) {
      return;
    }
    if (audioElement.paused) {
      audioElement.play().then(() => {
        this.isPlaying = true;
      }).catch(error => {
        console.error("❌ Fehler beim Abspielen:", error);
      });
    } else {
      audioElement.pause();
      this.isPlaying = false;
    }
  }

  openDialogSponsor() {
    this.dialog.open(DialogSponsorComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog', 
    });
  }

  openDialogSpecial() {
    this.dialog.open(DialogSpecialComponent, {
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
