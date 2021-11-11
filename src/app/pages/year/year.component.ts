
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent {

  dataSuccess: boolean = true;
  days: Array<number> = [];
  year: string = '';
  date: string = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    for (let i = 0, len = 25; i < len; i++) {
      this.days.push(i + 1);
    }

    this.route.data.subscribe(this.handleYear.bind(this));
  }

  handleYear = async (data: any): Promise<void> => {
    this.year = data.year;
    this.date = (new Date()).getDate().toString();
    this.dataSuccess = await this.dataService.getYearData(this.year);
  };

}
