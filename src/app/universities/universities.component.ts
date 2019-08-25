import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {

  universities$: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUniversities().subscribe(
        data => this.universities$ = data
      );
  }

}
