import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-nl2',
  standalone: true,
  imports: [MatButtonModule, RouterModule, RouterOutlet],
  templateUrl: './nl2.component.html',
  styleUrl: './nl2.component.scss'
})
export class Nl2Component {

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
