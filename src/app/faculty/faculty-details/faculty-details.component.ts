import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.scss']
})
export class FacultyDetailsComponent implements OnInit {

  faculty$: object;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.faculty$ = {};
    const id = this.route.snapshot.paramMap.get('id');

    this.data.getFacultyDetails(id).subscribe(
        data => this.faculty$ = data
      );
  }

}
