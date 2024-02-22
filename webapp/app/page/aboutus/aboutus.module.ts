import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { AboutUsRoutingModule } from './aboutus-routing.module';
import { AboutUsComponent } from './aboutus.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DirectivesModule } from'../../ui-modules/directive/directives.module';
import { DataTablesModule } from "angular-datatables";
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GoogleChartsModule } from 'angular-google-charts';
import {HighchartsChartModule } from 'highcharts-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    './assets/i18n/',
    '-lang.json'
  );
}
@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    GoogleChartsModule,
    HighchartsChartModule,
    DirectivesModule,
    NgbModule,
    NgSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers:[
 ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
