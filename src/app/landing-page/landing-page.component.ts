import { Component, OnInit } from '@angular/core';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  universities$: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUniversities().subscribe(
        data => this.universities$ = data

      )
  }

}
