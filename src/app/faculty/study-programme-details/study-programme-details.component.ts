import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-study-programme-details',
  templateUrl: './study-programme-details.component.html',
  styleUrls: ['./study-programme-details.component.scss']
})
export class StudyProgrammeDetailsComponent implements OnInit {

  studyProgramme$: object;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.studyProgramme$ = {};
    const id = this.route.snapshot.paramMap.get('id');

    this.data.getStudyPrograme(id).subscribe(
        data => this.studyProgramme$ = data
      );
  }

}
