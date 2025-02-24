import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-nl1',
  standalone: true,
  imports: [MatButtonModule, RouterModule, RouterOutlet],
  templateUrl: './nl1.component.html',
  styleUrl: './nl1.component.scss'
})
export class Nl1Component {

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
