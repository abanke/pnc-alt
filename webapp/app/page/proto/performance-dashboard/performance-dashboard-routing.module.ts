import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PerformanceDashboardComponent } from './performance-dashboard.component';

const routes: Routes = [
  { path: '', component: PerformanceDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceDashboardRoutingModule { }
