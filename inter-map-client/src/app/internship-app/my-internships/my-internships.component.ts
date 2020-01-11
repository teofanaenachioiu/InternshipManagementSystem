import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompanyProfileService} from '../profiles/company-profile/company-profile.service';
import {InternshipDTO} from '../data/InternshipDTO';
import {AddModalComponent} from './add-modal/add-modal.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-my-internships',
  templateUrl: './my-internships.component.html',
  styleUrls: ['./my-internships.component.css']
})
export class MyInternshipsComponent implements OnInit, OnDestroy {

  subscriptions = [];
  private error: Error;
  internships: InternshipDTO[];

  constructor(private companyService: CompanyProfileService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadItems();

  }

  getInternships() {
    return this.internships;
  }

  loadItems() {
    this.subscriptions.push(this.companyService.getAllInternships()
      .subscribe(internships => this.internships = internships,
        error => this.error = error));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addInternshipHandler() {
    this.dialog.open(AddModalComponent, {
      data: {
        action: 'add'
      }
    });
  }
}
