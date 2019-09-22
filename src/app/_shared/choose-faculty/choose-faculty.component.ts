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
  public university: University;

  constructor(private universitiesService: UniversitiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.universitiesService.getUniversity(id).subscribe(
      data => {
        this.university = data;
      });
  }
}
