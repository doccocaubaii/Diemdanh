import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, RouterOutlet,MatIconModule,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('diem-danh-app');
}
