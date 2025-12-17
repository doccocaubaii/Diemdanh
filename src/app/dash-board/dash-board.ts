import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-dash-board',
  imports: [MatButtonToggleGroup,
    MatButtonToggle, MatIcon, MatIconButton,],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.scss',
})
export class DashBoard {
  weekDays = [
    { name: 'Monday', number: '12' },
    { name: 'Tuesday', number: '13' },
    { name: 'Wednesday', number: '14' },
    { name: 'Thursday', number: '15' },
    { name: 'Friday', number: '16' },
    { name: 'Saturday', number: '17' },
    { name: 'Sunday', number: '18' }
  ];

  users = [
    { name: 'Nguyễn Văn B' },
    { name: 'Nguyễn Văn C' },
    { name: 'Nguyễn Văn D' }
  ];

  getEvent(userName: string, day: string) {
    if (userName === 'Nguyễn Văn B' && day === 'Thursday') return 'nghi-phep';
    if (userName === 'Nguyễn Văn D' && day === 'Tuesday') return 'den-muon';
    return null;
  }
}
