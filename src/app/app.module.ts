import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyCardComponent } from './shared/daily-card/daily-card.component';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { YearComponent } from './pages/year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyCardComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatCardModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
