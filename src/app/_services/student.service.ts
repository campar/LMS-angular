import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Student } from '../_models/student';

@Injectable({ providedIn: 'root' })
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentById(id: number) {
    return this.http.get<Student>(`${environment.apiUrl}/student/${id}`);
  }

  getStudentsByYearBySubject(yearId: number, subjectId: number) {
    return this.http.get<Student[]>(`${environment.apiUrl}/student/subject/${subjectId}/${yearId}`);
  }
}
