import {Sex} from './Sex';
import {Studies} from './Studies';
import {Experience} from './Experience';

export class Candidat {
  ID: string; // email
  lastName: string;
  firstName: string;
  address: string;
  telephone: string;
  birthDate: string;
  sex: Sex;
  candidateStatus: CandidateStatus;
  avatar: any; // byte[]
  linkLinkedin: string;
  linkGithub: string;
  description: string;
  languages: string;
  applications: any;
  studies: Studies[];
  experiences: Experience[];

  constructor() {

  }
}
