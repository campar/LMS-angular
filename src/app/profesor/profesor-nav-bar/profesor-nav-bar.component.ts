import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesor-nav-bar',
  templateUrl: './profesor-nav-bar.component.html',
  styleUrls: ['./profesor-nav-bar.component.scss']
})
export class ProfesorNavBarComponent implements OnInit {
  @Output() changedSelectedYear: EventEmitter<any> = new EventEmitter();

  public baseUrl: String;
  public subjectId: Number;
  public years: Number[] = [1, 2, 3, 4];
  public selectedYear: Number = 1;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let universityId = this.activatedRoute.parent.parent.parent.snapshot.params.id;
    let programId = this.activatedRoute.snapshot.params.programId;
    this.baseUrl = `/university/${universityId}/profesorPanel/${programId}`;
    this.subjectId = this.activatedRoute.snapshot.params.subjectId;
  }

  onChange() {
    this.changedSelectedYear.emit(this.selectedYear);
  }
}
