import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Professor } from '../_models/professor';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private http: HttpClient) { }

  getProfessors() {
    return this.http.get<Professor[]>(`${environment.apiUrl}/admin/user/professor`);
  }

  getProfessor(id) {
    return this.http.get<Professor>(`${environment.apiUrl}/admin/user/professor/${id}`);
  }

  createProfessor(name: string, jmbg: string, username: string, biography: string, email: string, password: string) {
    return this.http.put<Professor>(`${environment.apiUrl}/admin/user/professor`, { name, jmbg, username, biography, email, password });
  }

  updateProfessor(id: number, name: string, jmbg: string, username: string, biography: string, email: string, password: string) {
    return this.http.put<Professor>(`${environment.apiUrl}/admin/user/professor/${id}`, { id, name, jmbg, username, biography, email, password });
  }

  createEmployee(username: string, email: string, password: string) {
    return this.http.put<any>(`${environment.apiUrl}/admin/user/employee`, { username, email, password });
  }
}
