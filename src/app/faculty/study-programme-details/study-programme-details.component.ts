import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudyProgramme } from 'src/app/_models';
import { StudyProgrammeService } from 'src/app/_services/study-programme.service';

@Component({
  selector: 'app-study-programme-details',
  templateUrl: './study-programme-details.component.html',
  styleUrls: ['./study-programme-details.component.scss']
})
export class StudyProgrammeDetailsComponent implements OnInit {

  public studyProgramme: StudyProgramme;

  constructor(private studyProgrammeService: StudyProgrammeService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studyProgrammeService.getStudyProgramme(id).subscribe(
      (data: StudyProgramme) => {
        this.studyProgramme = data
        console.log(this.studyProgramme)
      });
  }
}
