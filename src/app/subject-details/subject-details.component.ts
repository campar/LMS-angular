import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  subject: object;



  constructor(private data: DataService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.subject = {};
    const id = this.route.snapshot.paramMap.get('id');

    this.data.getYearOfStudySubjectById(id).subscribe(
        data => this.subject = data
      );
  }
}
