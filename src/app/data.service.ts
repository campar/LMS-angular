import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const url = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // public url: 'http://localhost:8080';

  getUniversities() {
    return this.http.get(`${url}/university`);
  }

  getFacultiesByUniversityId(id) {
    return this.http.get(`${url}/university/${id}/faculties`);
  }

  getSubjectById(id) {
    return this.http.get(`${url}/subjects/${id}`);
  }

  getFacultyDetails(id) {
    return this.http.get(`${url}/faculties/${id}`);
  }

  getStudyPrograme(id) {
    return this.http.get(`${url}/study-programmes/${id}`);
  }

}
