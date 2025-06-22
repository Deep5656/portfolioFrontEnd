import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartComponent } from './high-chart.component';

describe('HighChartComponent', () => {
  let component: HighChartComponent;
  let fixture: ComponentFixture<HighChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighChartComponent]
    });
    fixture = TestBed.createComponent(HighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
