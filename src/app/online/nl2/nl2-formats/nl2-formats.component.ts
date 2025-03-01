import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogNl2BannerComponent } from './dialog-nl2-banner/dialog-nl2-banner.component';

@Component({
  selector: 'app-nl2-formats',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './nl2-formats.component.html',
  styleUrl: './nl2-formats.component.scss'
})
export class Nl2FormatsComponent {

  lines = Array(7);
  
    ads = {
      header: {
        title: 'SUPERBANNER HEADER XL',
        subtitle: '',
        size: '600 x 300 px',
        price1: 'ONLINE.NL2.SB_PRICE1',
      },
      promolink: {
        title: 'PROMOLINK',
        subtitle: 'ONLINE.NL1.AD_SUBTITLE',
        size: '235 x 157 px',
        price1: 'ONLINE.NL2.PL_PRICE1',
      },
      mr: {
        title: 'MEDIUM RECTANGLE',
        subtitle: '',
        size: '300 x 250 px',
        price1: 'ONLINE.NL2.MR_PRICE1',
      },
      banner: {
        title: 'FULLSIZEBANNER',
        subtitle: '',
        size: '600 x 150 px',
        price1: 'ONLINE.NL2.FB_PRICE1',
      }
    }
  
    constructor (public dialog: MatDialog) {}
  
    openDialog(ad: any) {
        this.dialog.open(DialogNl2BannerComponent, {
          width: '98%',
          maxWidth: '600px',
          panelClass: 'custom-dialog', // definiert in styles.css
          data: ad // Hier wird das komplette Ad-Objekt übergeben
        });
      }

}
