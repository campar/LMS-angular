import { Faculty } from './faculty';
import { Professor } from './professor';

export class StudyProgramme {
  id: number;
  name: string;
  description: string;
  faculty: Faculty;
  // yearsOfStudy: YearOfStudy[];
  // studyProgrammeStudents: StudyProgrammeStudent[];
  director: Professor;
}
