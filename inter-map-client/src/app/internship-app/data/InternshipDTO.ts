
export class InternshipDTO {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public status: string,
    public addedDate: Date,
    public startTime: Date,
    public endTime: Date,
    public nrMonths: number,
    public location: string,
    public nrApplicants: number,
    public paid: boolean ,
    public imagePath: string,
    public rating: number,
    public areaOfInterests: string,
    public areaOfInterestId: string,
    public company: string,
git
) { }
}
