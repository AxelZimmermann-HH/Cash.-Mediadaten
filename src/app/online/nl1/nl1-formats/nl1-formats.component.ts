import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogNl1BannerComponent } from './dialog-nl1-banner/dialog-nl1-banner.component';

@Component({
  selector: 'app-nl1-formats',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './nl1-formats.component.html',
  styleUrl: './nl1-formats.component.scss'
})
export class Nl1FormatsComponent {

  lines = Array(7);

  ads = {
    header: {
      title: 'SUPERBANNER HEADER XL',
      subtitle: '',
      size: '600 x 300 px',
      price1: 'ONLINE.NL1.SB_PRICE1',
      price2: 'ONLINE.NL1.SB_PRICE2',
      price3: 'ONLINE.NL1.SB_PRICE3'
    },
    promolink: {
      title: 'PROMOLINK',
      subtitle: 'ONLINE.NL1.AD_SUBTITLE',
      size: '235 x 157 px',
      price1: 'ONLINE.NL1.PL_PRICE1',
      price2: 'ONLINE.NL1.PL_PRICE2',
      price3: 'ONLINE.NL1.PL_PRICE3'
    },
    mr: {
      title: 'MEDIUM RECTANGLE',
      subtitle: '',
      size: '300 x 250 px',
      price1: 'ONLINE.NL1.MR_PRICE1',
      price2: 'ONLINE.NL1.MR_PRICE2',
      price3: 'ONLINE.NL1.MR_PRICE3'
    },
    banner: {
      title: 'FULLSIZEBANNER',
      subtitle: '',
      size: '600 x 150 px',
      price1: 'ONLINE.NL1.FB_PRICE1',
      price2: 'ONLINE.NL1.FB_PRICE2',
      price3: 'ONLINE.NL1.FB_PRICE3'
    }
  }

  constructor (public dialog: MatDialog) {}

  openDialog(ad: any) {
      this.dialog.open(DialogNl1BannerComponent, {
        width: '98%',
        maxWidth: '600px',
        panelClass: 'custom-dialog', // definiert in styles.css
        data: ad // Hier wird das komplette Ad-Objekt übergeben
      });
    }

}
