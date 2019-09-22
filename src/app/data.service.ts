import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getUniversities() {
    return this.http.get(`${this.url}/university`);
  }

  getYearOfStudySubjectById(id) {
    return this.http.get(`${this.url}/yearOfStudySubject/${id}`);
  }

  getFacultyDetails(id) {
    return this.http.get(`${this.url}/faculties/${id}`);
  }

  getStudyPrograme(id) {
    return this.http.get(`${this.url}/study-programmes/${id}`);
  }

}
