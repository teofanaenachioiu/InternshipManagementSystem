import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../../../../components/candidate-menu/candidate-menu.component';

@Component({
  selector: 'app-extra-message-dialog',
  templateUrl: './extra-message-dialog.component.html',
  styleUrls: ['./extra-message-dialog.component.css']
})
export class ExtraMessageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
