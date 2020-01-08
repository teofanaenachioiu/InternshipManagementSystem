import {Sex} from './Sex';
import {Studies} from './Studies';
import {Experience} from './Experience';

export class Candidat {
  id: string; // email
  lastName: string;
  firstName: string;
  address: string;
  telephone: string;
  birthDate: Date;
  sex: Sex;
  candidateStatus: CandidateStatus;
  languages: string[];
  avatar: any; // byte[]
  linkLinkedin: string;
  linkGithub: string;
  description: string;
  applications: any;
  studies: Studies[];
  experiences: Experience[];

  constructor() {

  }
}
