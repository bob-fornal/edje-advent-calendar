
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { YearComponent } from './pages/year/year.component';

const year: string = (new Date()).getFullYear().toString();
const routes: Routes = [
  { path: '', redirectTo: `/year/${ year }`, pathMatch: 'full' },
  { path: 'year/:year', component: YearComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
