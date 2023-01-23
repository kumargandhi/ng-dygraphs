import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as Dygraph from 'dygraphs';

@Component({
  selector: 'app-dygraphs-chart',
  templateUrl: './dygraphs-chart.component.html',
  styleUrls: ['./dygraphs-chart.component.scss'],
})
export class DygraphsChartComponent implements OnInit, AfterViewInit {

  @ViewChild('dygraphsChart') dygraphsChart!: ElementRef;
  data = [
    [1, 10, 100],
    [2, 20, 80],
    [3, 50, 60],
    [4, 70, 80],
  ];
  options = {
    width: 500,
    height: 300,
    labels: ['X', 'Y1', 'Y2'],
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    new Dygraph.default(
      this.dygraphsChart.nativeElement,
      this.data,
      this.options
    );
  }
}
