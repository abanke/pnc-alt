import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfviewerRoutingModule } from './pdfviewer-routing.module';
import { PdfviewerComponent } from './pdfviewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PdfviewerComponent],
  imports: [
    CommonModule,
    PdfviewerRoutingModule,
    NgbModule,
    NgxExtendedPdfViewerModule
  ],
  providers: []
})
export class PdfviewerModule { }
