import { Injectable } from '@angular/core';
import {Internship} from '../../data/Internship';
import {InternshipDTO} from '../../data/InternshipDTO';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  internships: InternshipDTO[] = [];
  companyUsername: string;
  statuses: string[] = ['open', 'pending', 'closed'];

  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.companyUsername = currentUser.username;
    this.internships.push(new InternshipDTO(
      '1',
      'Java',
      'Become a Java devaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'open',
      new Date(Date.now()),
      new Date(Date.UTC(2020, 1, 15)),
      new Date(Date.UTC(2020, 3, 15)),
      3,
      'Cluj-Napoca',
      0,
      true,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWE3zHTMlhOEI2JgXAOS8p8vD2yZObgDylJsAJzJDA6fZuXfF&s',
      4,
      'asdsa',
      '1',
      this.companyUsername
    ));
  }

  public getInternships() {
    return this.internships;
  }

  public removeInternship(index) {
    this.internships.splice(index, 1);
  }

  public addInternship(internship: InternshipDTO) {
    this.internships.push(internship);
  }

  public updateInternship(internship: InternshipDTO) {
    for (let i = 0; i < this.internships.length; i++) {
      if (this.internships[i].name === internship.name) {
        this.internships[i] = internship;
        return;
      }
    }
  }
}
