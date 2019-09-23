import { BaseModel } from './base-model';

export class Subject extends BaseModel {
  id: number;
  name: string;
  espb: number;
  required: boolean;
  description: string;
  numberOfLectures: number;
  numberOfExercises: number;
  differentKindOfLectures: number;
  researchWork: number;
  otherClasses: number;
  yearOfStudySubject: any;
  syllabusOutcomes: any;
}
