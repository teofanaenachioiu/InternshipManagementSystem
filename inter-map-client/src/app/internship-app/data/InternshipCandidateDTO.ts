import {ApplicationStatus} from './ApplicationDTO';

export class InternshipCandidateDTO {
  email: string;
  name: string;
  status: ApplicationStatus;
  extraMessage: string;
}
