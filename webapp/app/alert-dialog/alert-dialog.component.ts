import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig ,MAT_DIALOG_DATA ,MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"

  // private readonly triggerElementRef: ElementRef;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private readonly _matDialogRef: MatDialogRef<AlertDialogComponent>

    ) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this._matDialogRef.updateSize('300vw','300vw')
  }


  ngOnInit() {
    console.info(this.data);
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();

    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this._matDialogRef.updatePosition(matDialogConfig.position);
  }

  onConfirmClick(): void {
    this._matDialogRef.close(true);
  }

}