import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LogoutDialog} from '../logout-dialog/logout-dialog';

export interface DialogData {
  logoutConfirmed: boolean;
}

@Component({
  selector: 'app-candidate-menu',
  templateUrl: './candidate-menu.component.html',
  styleUrls: ['./candidate-menu.component.css']
})
export class CandidateMenuComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        console.log('have to make logout');
        this.router.navigate(['/']);
      } else {
        console.log('logout canceled');
      }
    });
  }
}

