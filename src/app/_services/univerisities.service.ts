import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { University } from '../_models/university';

@Injectable({ providedIn: 'root' })
export class UniversitiesService {

  constructor(private http: HttpClient) { }

  getUniversity(id: number) {
    return this.http.get<University>(`${environment.apiUrl}/university/${id}`);
  }
}
