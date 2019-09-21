import { University } from './university';
import { Professor } from './professor';
import { StudyProgramme } from './study-programme';
import { BaseModel } from './base-model';

export class Faculty extends BaseModel {
  id: number;
  name: string;
  phoneNumber: string;
  description: string;
  university: University;
  studyProgrammes: StudyProgramme[];
  dean: Professor;
}
