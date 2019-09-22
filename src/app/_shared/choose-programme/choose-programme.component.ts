import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from '../../_models';
import { FacultiesService } from '../../_services/faculties.service';

@Component({
  selector: 'app-choose-programme',
  templateUrl: './choose-programme.component.html',
  styleUrls: ['./choose-programme.component.scss']
})
export class ChooseProgrammeComponent implements OnInit {
  public faculty: Faculty;

  constructor(private facultiesService: FacultiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.facultiesService.getFaculty(id).subscribe(
      data => {
        this.faculty = data;
        console.log(data);
      });
  }
}
