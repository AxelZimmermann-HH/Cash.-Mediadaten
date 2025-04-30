import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private metaService: Meta) {}

  updateTags(pathname: string) {
    // 1. Canonical setzen
    const domain = 'https://www.cash-online.de';
    const canonicalUrl = domain + (pathname.endsWith('/') ? pathname : pathname + '/');

    const existingLink = document.querySelector("link[rel='canonical']");
    if (existingLink) {
      existingLink.remove();
    }

    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'canonical');
    linkEl.setAttribute('href', canonicalUrl);
    document.head.appendChild(linkEl);

    // 2. Robots-Meta-Tag setzen
    this.metaService.removeTag('name="robots"');
    this.metaService.addTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}