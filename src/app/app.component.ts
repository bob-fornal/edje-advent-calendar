import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  days: Array<number> = [];

  constructor() {
    for (let i = 0, len = 25; i < len; i++) {
      this.days.push(i + 1);
    }
  }
}
