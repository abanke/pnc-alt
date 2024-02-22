import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLoginComponent } from './weblogin.component';

const routes: Routes = [
  { path: '', component: WebLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLoginRoutingModule { }