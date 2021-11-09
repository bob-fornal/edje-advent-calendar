import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'daily-card',
  templateUrl: './daily-card.component.html',
  styleUrls: ['./daily-card.component.scss']
})
export class DailyCardComponent implements OnInit {

  @Input() day: string = '';

  open: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleDoor = (): void => {
    this.open = !this.open;
  };

}
