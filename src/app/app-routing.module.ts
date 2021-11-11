
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { YearComponent } from './pages/year/year.component';

const year: string = (new Date()).getFullYear().toString();
const routes: Routes = [
  { path: 'year-2022', component: YearComponent, data: { year: '2022' } },
  { path: '', redirectTo: '/year-2022', pathMatch: 'full' }
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
