export class Application {

  //Information expected for submitting application
  birth_day: number;
  birth_month: number;
  birth_year: number;
  education: string = '';
  university: string = '';
  other_university: string = '';
  travel_origin: string = '';
  graduation_season: string = '';
  graduation_year: number = 2019;
  major: string[] = [];
  hackathons: number = 1;
  github: string = null;
  linkedin: string = null;
  website: string = null;
  devpost: string = null;
  other_link: string = null;
  statement: string = '';
  race: string[] = [];
  gender: string = '';
  outside_north_america: string = '';

  //Information added to application after creation
  id: number = 0;
  status: string = "";
  user_id: number = 0;
  accepted_date: string = null;
  created_at: string = "";
  updated_at: string = "";
}

export class ApplicationSubmission {
    //Information expected for submitting application
    birth_day: number;
    birth_month: number;
    birth_year: number;
    education: string = '';
    university: string = '';
    other_university: string = '';
    travel_origin: string = '';
    graduation_season: string = '';
    graduation_year: number = 2019;
    major: string[] = [];
    hackathons: number = 1;
    github: string = null;
    linkedin: string = null;
    website: string = null;
    devpost: string = null;
    other_link: string = null;
    statement: string = '';
    race: string[] = [];
    gender: string = '';
    outside_north_america: string = '';
    reimbursement: boolean = false;
}

export class College {
  name: string = '';
}
