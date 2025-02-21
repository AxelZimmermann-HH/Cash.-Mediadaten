import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {
  lines = Array(6);
  mcbText1 = Array(4);
}
