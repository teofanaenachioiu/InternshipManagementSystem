
export class InternshipDTO {
  constructor(
    public id: string,
    public name: string,
    public startTime: Date,
    public endTime: Date,
    public paid: boolean,
    public nrMonths: number,
    public description: string,
    public nrApplicants: number,
    public status: string,
    public location: string,
    public addedDate: Date,
    public company: string,
    public logo: any,
    public areaOfInterest: string,
    public averageOfFeedbacks: number,
    public rating: number
) { }
}
