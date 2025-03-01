import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogFbPostComponent } from './dialog-fb-post/dialog-fb-post.component';
import { DialogFbReelComponent } from './dialog-fb-reel/dialog-fb-reel.component';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.scss'
})
export class FacebookComponent {

  constructor (public dialog: MatDialog) {}

  dialogFbPost = DialogFbPostComponent;
  dialogFbReel = DialogFbReelComponent;

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
