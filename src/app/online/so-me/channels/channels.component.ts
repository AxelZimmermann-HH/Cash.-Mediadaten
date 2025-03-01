import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TranslationService } from '../../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [MatButtonModule, RouterModule, RouterOutlet, MatIconModule],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss'
})
export class ChannelsComponent {
  constructor (private router: Router) {}
  
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
