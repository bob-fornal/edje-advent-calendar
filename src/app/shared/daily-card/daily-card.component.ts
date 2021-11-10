import { Component, Input, } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'daily-card',
  templateUrl: './daily-card.component.html',
  styleUrls: ['./daily-card.component.scss']
})
export class DailyCardComponent {

  @Input() day: string = '';
  @Input() date: string = '';
  data: any = { title: 'waiting' };

  open: boolean = false;

  constructor(
    private dataSerice: DataService
  ) {
    this.dataSerice.data.subscribe(this.handleData.bind(this));
    setTimeout(() => {
      this.open = this.beforeDate();
    }, 500);
  }

  hasData = (): boolean => ![ 'Open', 'waiting' ].includes(this.data.title);
  pastDate = (): boolean => Number(this.day) > Number(this.date);
  beforeDate = (): boolean => Number(this.day) < Number(this.date);

  handleData = (data: any) => {
    this.data = (data[this.day] === undefined) ? { title: 'waiting' } : data[this.day];
  };

  toggleDoor = (): void => {
    if (this.pastDate()) return;
    this.open = !this.open;
  };

}
