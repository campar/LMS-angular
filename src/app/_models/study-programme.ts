import { Faculty } from './faculty';
import { Professor } from './professor';
import { BaseModel } from './base-model';
import { Degree } from './degree';

export class StudyProgramme extends BaseModel {
  id: number;
  name: string;
  title: string;
  degree: Degree;
  description: string;
  faculty: Faculty;
  // yearsOfStudy: YearOfStudy[];
  // studyProgrammeStudents: StudyProgrammeStudent[];
  director: Professor;
}
