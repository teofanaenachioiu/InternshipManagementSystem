import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LogoutDialog} from '../logout-dialog/logout-dialog';
import {User} from '../../core/User';
import {AuthService} from '../../auth/auth.service';

export interface DialogData {
  logoutConfirmed: boolean;
}

@Component({
  selector: 'app-candidate-menu',
  templateUrl: './candidate-menu.component.html',
  styleUrls: ['./candidate-menu.component.css']
})
export class CandidateMenuComponent implements OnInit {
  currentUser: User;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        console.log('have to make logout');
        this.logout();
      } else {
        console.log('logout canceled');
      }
    });
  }
}

