import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-silabus',
  templateUrl: './silabus.component.html',
  styleUrls: ['./silabus.component.scss']
})
export class SilabusComponent implements OnInit {

  @Input() syllabusOutcomes$ =  [].reverse();
  constructor() { }

  ngOnInit() {
  }

}
