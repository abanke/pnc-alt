import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PerformanceDashboardComponent } from './performance-dashboard.component';
import { PerformanceDashboardRoutingModule } from './performance-dashboard-routing.module';

@NgModule({
  declarations: [PerformanceDashboardComponent],
  imports: [
    CommonModule,
    PerformanceDashboardRoutingModule,
    NgbModule,
    NgbTooltipModule,
    FormsModule
  ]
})
export class PerformanceDashboardModule { }
