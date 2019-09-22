import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Professor, Employee } from '../_models';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private http: HttpClient) { }

  getProfessors() {
    return this.http.get<Professor[]>(`${environment.apiUrl}/admin/user/professor`);
  }

  getProfessor(id: number) {
    return this.http.get<Professor>(`${environment.apiUrl}/admin/user/professor/${id}`);
  }

  createProfessor(name: string, jmbg: string, username: string, biography: string, email: string, password: string) {
    return this.http.post<Professor>(`${environment.apiUrl}/admin/user/professor`, { name, jmbg, username, biography, email, password });
  }

  updateProfessor(id: number, name: string, jmbg: string, username: string, biography: string, email: string, password: string) {
    return this.http.put<Professor>(`${environment.apiUrl}/admin/user/professor/${id}`, { id, name, jmbg, username, biography, email, password });
  }

  getEmployees() {
    return this.http.get<Employee[]>(`${environment.apiUrl}/admin/user/employee`);
  }

  getEmployee(id: number) {
    return this.http.get<Employee>(`${environment.apiUrl}/admin/user/employee/${id}`);
  }

  createEmployee(username: string, email: string, password: string) {
    return this.http.post<Employee>(`${environment.apiUrl}/admin/user/employee`, { username, email, password });
  }

  updateEmployee(id: number, username: string, email: string, password: string) {
    return this.http.put<Employee>(`${environment.apiUrl}/admin/user/employee/${id}`, { id, username, email, password });
  }
}
