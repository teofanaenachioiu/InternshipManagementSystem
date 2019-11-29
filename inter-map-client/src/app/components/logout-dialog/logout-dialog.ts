import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../candidate-menu/candidate-menu.component';
@Component({
  selector: 'app-logout-dialog',
  templateUrl: '../logout-dialog/logout-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class LogoutDialog {

  constructor(
    public dialogRef: MatDialogRef<LogoutDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
