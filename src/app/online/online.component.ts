import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { TranslationService } from '../services/translation.service';


@Component({
  selector: 'app-online',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatSidenavModule, RouterModule, RouterOutlet, MatButtonToggleModule],
  templateUrl: './online.component.html',
  styleUrl: './online.component.scss'
})
export class OnlineComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  drawerMode: 'side' | 'over' = 'side';
  drawerOpened = true;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 1400px)'])
      .subscribe(result => {
        if (result.matches) {
          this.drawerMode = 'over'; 
          this.drawerOpened = false; 
        } else {
          this.drawerMode = 'side'; 
          this.drawerOpened = true;
        }
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

  /**
   * Showing or hiding the sidebar.
   */
  toggleDrawer(): void {
    if (this.drawerMode === 'over') {
      this.drawer.toggle();
    }
  }
}
