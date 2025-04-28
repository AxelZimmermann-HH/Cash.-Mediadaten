import { Component, inject, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-topics-sv',
    imports: [CommonModule, MatIconModule],
    templateUrl: './topics-sv.component.html',
    styleUrl: './topics-sv.component.scss'
})
export class TopicsSvComponent {

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  showScrollButtons = window.innerWidth > 1000; // Initialer Zustand

  @HostListener('window:resize', [])
  onResize() {
    this.showScrollButtons = window.innerWidth > 1000;
  }

  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
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
