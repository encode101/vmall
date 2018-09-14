import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyStatsComponent } from './weekly-stats.component';

describe('WeeklyStatsComponent', () => {
  let component: WeeklyStatsComponent;
  let fixture: ComponentFixture<WeeklyStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
