import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUniversities() {
    return this.http.get('http://192.168.43.197:8081/university');
  }

  getFacultiesByUniversityId(id) {
    return this.http.get(`http://192.168.43.197:8081/university/${id}/faculties`);
  }

  getSubjectById(id) {
    return this.http.get(`http://192.168.43.197:8081/subjects/${id}`);
  }

  getFacultyDetails(id) {
    return this.http.get(`http://192.168.43.197:8081/faculties/${id}`);
  }

  getStudyPrograme(id) {
    return this.http.get(`http://192.168.43.197:8081/study-programmes/${id}`);
  }

}
