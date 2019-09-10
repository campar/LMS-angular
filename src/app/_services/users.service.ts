import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private http: HttpClient) { }

  createProfessor(name: string, jmbg: string, username: string, biography: string, email: string, password: string) {
    return this.http.put<any>(`${environment.apiUrl}/admin/user/professor`, { name, jmbg, username, biography, email, password });
  }
}
