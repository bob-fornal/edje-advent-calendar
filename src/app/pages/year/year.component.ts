
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  days: Array<number> = [];
  year: string = '';

  constructor(
    private route: ActivatedRoute
  ) {
    for (let i = 0, len = 25; i < len; i++) {
      this.days.push(i + 1);
    }
  }

  ngOnInit(): void {
    this.year = (this.route.snapshot.paramMap.get('year') as string);
  }

}
