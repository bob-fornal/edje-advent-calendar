
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { DataModel } from '../interfaces/data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: BehaviorSubject<DataModel> = new BehaviorSubject<DataModel>({});

  constructor(
    private http: HttpClient
  ) {}

  getYearData = async (year: string): Promise<void> => {
    const data: DataModel = await this.http.get<DataModel>(`./assets/${ year }/data.json`).toPromise();
    this.data.next(data);
  };

}
