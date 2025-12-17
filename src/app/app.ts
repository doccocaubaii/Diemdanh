import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule,
    RouterOutlet,
    MatIconModule,
    MatIcon,
    RouterLinkActive,
    RouterLink,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('diem-danh-app');
}
