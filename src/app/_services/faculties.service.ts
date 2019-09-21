import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Faculty } from '../_models';

@Injectable({ providedIn: 'root' })
export class FacultiesService {

  constructor(private http: HttpClient) { }

  getFaculty(id: number) {
    return this.http.get<Faculty>(`${environment.apiUrl}/faculties/${id}`);
  }

  getFacultiesByUniversityId(universityId: number) {
    return this.http.get<Faculty[]>(`${environment.apiUrl}/university/${universityId}/faculties`);
  }
}
