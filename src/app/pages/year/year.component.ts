
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

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
  }

  ngOnInit(): void {
    this.year = (this.route.snapshot.paramMap.get('year') as string);
    this.date = (new Date()).getDate().toString();
    this.dataService.getYearData(this.year);
  }

}
