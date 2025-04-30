import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private seoService: SeoService) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const { pathname, search, hash } = window.location;

        // 1. Slash am Ende ergänzen (nur Browser-URL)
        if (!pathname.endsWith('/') && pathname !== '/') {
          const newUrl = pathname + '/' + search + hash;
          window.history.replaceState({}, '', newUrl);
        }

        // 2. SEO-Tags setzen (Canonical + Robots)
        this.seoService.updateTags(pathname);
      });
  }
}