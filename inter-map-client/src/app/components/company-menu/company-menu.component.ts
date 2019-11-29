import { Component, OnInit } from '@angular/core';
import {LogoutDialog} from '../logout-dialog/logout-dialog';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.component.html',
  styleUrls: ['./company-menu.component.css']
})
export class CompanyMenuComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

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
