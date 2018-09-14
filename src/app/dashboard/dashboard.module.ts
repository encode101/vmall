import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyStatsComponent } from './weekly-stats/weekly-stats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeeklyStatsComponent],
  exports: [WeeklyStatsComponent],
  bootstrap : [WeeklyStatsComponent]
})
export class DashboardModule { }
