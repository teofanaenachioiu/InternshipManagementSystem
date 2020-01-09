import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CompanyProfileService} from '../company-profile.service';
import {ConfirmRemoveInternshipComponent} from './confirm-remove-internship/confirm-remove-internship.component';
import {EditModalComponent} from '../edit-modal/edit-modal.component';
import {InternshipDTO} from '../../../data/InternshipDTO';
import {Router} from '@angular/router';


@Component({
  selector: 'app-company-internships',
  templateUrl: './company-internships.component.html',
  styleUrls: ['./company-internships.component.css']
})
export class CompanyInternshipsComponent implements OnInit {

  @Input() internship: InternshipDTO;
  @Input() index: number;

  constructor(public dialog: MatDialog,
              private companyService: CompanyProfileService,
              private router: Router) { }

  ngOnInit() {
  }

  editInternshipHandler() {
    this.dialog.open(EditModalComponent, {
      data: {
        internship: this.internship
      }
    });
  }

  removeInternshipHandler() {
    const dialogRef = this.dialog.open(ConfirmRemoveInternshipComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.companyService.removeInternship(this.internship);
      }
    });
  }

  showCandidates() {
    this.companyService.setSelectedInternshipId(this.internship.id);
    this.router.navigate(['/internship-app/internship-candidates'])
      .then();
  }
}
