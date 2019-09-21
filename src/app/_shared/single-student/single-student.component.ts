import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StudentService } from 'src/app/_services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss']
})
export class SingleStudentComponent implements OnInit {
  public student: Student = new Student;

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let studentId = +this.route.snapshot.paramMap.get('id');

    this.studentService.getStudentById(studentId)
      .subscribe(
        data => {
          this.student = data;
        },
        error => {
          console.log(error);
        });
  }
}
