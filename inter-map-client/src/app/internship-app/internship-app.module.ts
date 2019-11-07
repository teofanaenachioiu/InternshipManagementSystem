import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from './internships/internships.component';
import {InternshipAppRoutingModule} from './internship-app-routing.module';



@NgModule({
  declarations: [InternshipsComponent],
  imports: [
    CommonModule,
    InternshipAppRoutingModule
  ]
})
export class InternshipAppModule { }
