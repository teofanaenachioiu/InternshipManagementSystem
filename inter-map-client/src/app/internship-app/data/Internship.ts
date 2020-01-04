
export class Internship {
    constructor(                                                
      public name: string,
      public startTime: Date,
      public endTime: Date,
      public paid: boolean ,
      public nrMonths: number,
      public description: string,
      public nrApplicant: number,
      public status: string,
      public location: string,
      public addedDate: Date,
      public company: string,
      public imagePath: string,
      public interests: string,
      public numberOfFeedbacks: number,
      public averageOfFeedbacks: number,
      public rating: number
      ) { }
  }

