import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { StudyProgramme, Professor, Degree } from '../_models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StudyProgrammeService {

  constructor(private http: HttpClient) { }

  getStudyProgramme(id: number) {
    return this.http.get<StudyProgramme>(`${environment.apiUrl}/study-programmes/${id}`).pipe(map((res) => {
      res.director = new Professor(res.director);
      res.degree = new Degree({ name: res.degree });
      return new StudyProgramme(res)
    }));
  }
}
