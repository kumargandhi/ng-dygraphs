import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DygraphsChartComponent } from './dygraphs-chart/dygraphs-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DygraphsChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
