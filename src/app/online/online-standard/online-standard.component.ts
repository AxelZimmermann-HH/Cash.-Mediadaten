import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDisplaySmallComponent } from './dialog-display-small/dialog-display-small.component';
import { DialogDisplayBigComponent } from './dialog-display-big/dialog-display-big.component';

@Component({
  selector: 'app-online-standard',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './online-standard.component.html',
  styleUrl: './online-standard.component.scss'
})
export class OnlineStandardComponent {
  lines = Array(9);

  ads = {
    billboard: { 
      id: 'billboard', 
      title: 'BILLBOARD', 
      subtitle: '',
      plimage: '',
      widthD: '1.250', 
      heightD: '180', 
      widthT: '728', 
      heightT: '90', 
      widthM: '300', 
      heightM: '75', 
      price: '90,– ', 
      infos: '' },
    mrTop: {
      id: 'mrtop', 
      title: 'MEDIUM RECTANGLE SIDEBAR TOP', 
      subtitle: '',
      plimage: '',
      widthD: '300', 
      heightD: '250', 
      widthT: '300', 
      heightT: '250', 
      widthM: '300', 
      heightM: '250', 
      price: '82,– ', 
      infos: '' 
    },
    mrContent: {
      id: 'mrcontent', 
      title: 'MEDIUM RECTANGLE CONTENT TOP', 
      subtitle: '',
      plimage: '',
      widthD: '300', 
      heightD: '250', 
      widthT: '300', 
      heightT: '250', 
      widthM: '300', 
      heightM: '250', 
      price: '77,– ', 
      infos: '' 
    },
    mrBottom: {
      id: 'mrbottom', 
      title: 'MEDIUM RECTANGLE SIDEBAR BOTTOM', 
      subtitle: '',
      plimage: '',
      widthD: '300', 
      heightD: '250', 
      widthT: '300', 
      heightT: '250', 
      widthM: '300', 
      heightM: '250', 
      price: '55,– ', 
      infos: '' 
    },
    promolink: {
      id: 'promolink', 
      title: 'PROMOLINK',
      subtitle: 'ONLINE.STANDARD.PL_SUBTITLE',
      plimage: 'ONLINE.STANDARD.PL_IMAGE',
      widthD: '1280', 
      heightD: '720', 
      widthT: '728', 
      heightT: '410', 
      widthM: '320', 
      heightM: '180', 
      price: '88,– ', 
      infos: ''
    },
    
  };

  topAds = {
      lbTitle: 'SUPER LEADERBOARD',
      lbWidthD: '1280', 
      lbHeightD: '90', 
      lbWidthT: '728', 
      lbHeightT: '90', 
      lbWidthM: '300', 
      lbHeightM: '75', 
      lbPrice: '75,– ', 

      ssTitle: 'SKYSCRAPER',
      subtitle: '(ausschließlich Desktop)', 
      ssWidthD: '160-300', 
      ssHeightD: '600', 
      ssPrice: '70,– ', 

      wpTitle: 'WALLPAPER',
      wpSizeComplete: '1.280 x 90 px + 160-300 x 600 px', 
      wpPrice: '90,– ', 

      dsTitle: 'DOUBLE SITEBAR',
      dsSizeComplete: '2x 160-300 x 600 px', 
      dsPrice: '90,– ', 
  }

  constructor (public dialog: MatDialog) {}

  openDialog(component: any) {
    const dialogRef = this.dialog.open(component, {
      width: '98%', 
      maxWidth: '600px',
      panelClass: 'custom-dialog' // definiert in styles.css
    });
  }

  openDialogSmall(ad: any) {
    this.dialog.open(DialogDisplaySmallComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog', 
      data: ad 
    });
  }

  openDialogBig(ad: any) {
    this.dialog.open(DialogDisplayBigComponent, {
      width: '98%',
      maxWidth: '600px',
      panelClass: 'custom-dialog', // definiert in styles.css
      data: ad // Hier wird das komplette Ad-Objekt übergeben
    });
  }

  ngAfterViewInit() {
    const topAds = document.querySelectorAll('.top-ads');
  
    topAds.forEach(ad => {
      ad.addEventListener('mouseenter', () => {
        topAds.forEach(el => el.classList.add('glitch-active'));
      });
  
      ad.addEventListener('mouseleave', () => {
        topAds.forEach(el => el.classList.remove('glitch-active'));
      });
    });
  }
}
