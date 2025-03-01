import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogFbPostComponent } from '../facebook/dialog-fb-post/dialog-fb-post.component';
import { DialogFbReelComponent } from '../facebook/dialog-fb-reel/dialog-fb-reel.component';
import { DialogInstaPostComponent } from './dialog-insta-post/dialog-insta-post.component';
import { DialogInstaReelComponent } from './dialog-insta-reel/dialog-insta-reel.component';
import { DialogInstaStoryComponent } from './dialog-insta-story/dialog-insta-story.component';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss'
})
export class InstagramComponent {

  constructor (public dialog: MatDialog) {}
  
    dialogFbPost = DialogFbPostComponent;
    dialogFbReel = DialogFbReelComponent;

    dialogInstaPost = DialogInstaPostComponent;
    dialogInstaStory = DialogInstaStoryComponent;
    dialogInstaReel = DialogInstaReelComponent;

    @ViewChild('videoElement', { static: true }) video!: ElementRef<HTMLVideoElement>;
    isPlaying: boolean = false; 

    toggleVideo() {
      if (this.video.nativeElement.paused) {
        this.video.nativeElement.play();
        this.isPlaying = true;
      } else {
        this.video.nativeElement.pause();
        this.isPlaying = false;
      }
    }
  
    openDialog(comp: any) {
          this.dialog.open(comp, {
            width: '98%',
            maxWidth: '600px',
            panelClass: 'custom-dialog', 
          });
      }
  
  
  
    translationData = inject(TranslationService);
        activeLang: 'en' | 'de' = this.translationData.getCurrentLanguage();
      
        setActiveLang(lang: 'en' | 'de') {
          this.activeLang = lang;
          this.translationData.setLanguage(lang);  
        }
      
        getTranslation(key: string): string {
          return this.translationData.getTranslation(key);  
        }

}
