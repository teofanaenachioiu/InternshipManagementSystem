import {FeedbackDTO} from './FeedbackDTO';

export class ApplicationDTO {
  id: string;
  idCandidate: string;
  idInternship: string;
  idCompany: string;
  nameCompany: string;
  extraMessage: string;
  name: string;
  startTime: Date;
  endTime: Date;
  paid: boolean;
  nrMonths: boolean;
  description: string;
  nrApplicants: number;
  status: InternshipStatus;
  location: string;
  addedDate: Date;
  applicationStatus: ApplicationStatus;
  feedbacks: Set<FeedbackDTO>;
}

export enum InternshipStatus {
  Open,
  Closed
}

export enum ApplicationStatus {
  Applied,
  Replied,
  Accepted
}


