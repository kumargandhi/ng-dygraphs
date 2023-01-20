import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DygraphsChartComponent } from './dygraphs-chart.component';

describe('DygraphsChartComponent', () => {
  let component: DygraphsChartComponent;
  let fixture: ComponentFixture<DygraphsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DygraphsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DygraphsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
