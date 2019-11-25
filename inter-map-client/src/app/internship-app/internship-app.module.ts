import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from './internships/internships.component';
import {InternshipAppRoutingModule} from './internship-app-routing.module';
import { InternshipItemComponent } from './internship-list/internship-item/internship-item.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { FormsModule } from '@angular/forms';
import { FilterCompanyPipe } from './data/filter-company.pipe';




@NgModule({
  declarations: [InternshipsComponent, InternshipItemComponent, InternshipListComponent, FilterCompanyPipe],
  imports: [
    CommonModule,
    InternshipAppRoutingModule,
    FormsModule
  ]
})
export class InternshipAppModule { }
