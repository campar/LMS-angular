import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from '../../_models';
import { UniversitiesService } from '../../_services/univerisities.service';

@Component({
  selector: 'app-choose-faculty',
  templateUrl: './choose-faculty.component.html',
  styleUrls: ['./choose-faculty.component.scss']
})
export class ChooseFacultyComponent implements OnInit {
  public universityId: number;
  public university: University;

  constructor(private universitiesService: UniversitiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.universityId = Number(this.route.parent.parent.snapshot.params.id);

    this.universitiesService.getUniversity(this.universityId).subscribe(
      data => {
        this.university = data;
      });
  }
}
