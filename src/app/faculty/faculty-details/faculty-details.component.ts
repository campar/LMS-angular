import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from 'src/app/_models';
import { FacultiesService } from 'src/app/_services/faculties.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.scss']
})
export class FacultyDetailsComponent implements OnInit {

  public faculty: Faculty;
  constructor(private facultiesService: FacultiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.facultiesService.getFaculty(id).subscribe(
      (data: Faculty) => {
        this.faculty = data
      });
  }
}
