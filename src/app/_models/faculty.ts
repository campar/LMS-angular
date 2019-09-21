import { University } from './university';
import { Professor } from './professor';
import { StudyProgramme } from './study-programme';

export class Faculty {
  id: number;
	name: string;
  phoneNumber: string;
  description: string;
  university: University;
  studyProgrammes: StudyProgramme[];
  dean: Professor;
}
