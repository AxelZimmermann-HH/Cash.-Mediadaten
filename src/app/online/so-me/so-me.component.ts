import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-so-me',
  standalone: true,
  imports: [],
  templateUrl: './so-me.component.html',
  styleUrl: './so-me.component.scss'
})
export class SoMeComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
