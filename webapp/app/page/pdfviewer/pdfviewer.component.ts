import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss']
})
export class PdfviewerComponent implements OnInit {

  blob: any;
  isSidebarVisible = false;
  constructor() { }

  ngOnInit(): void {

    console.log('blob-----------:::::',this.blob);
    // [base64Src]="base64file.base64"
    
  }

  
}
