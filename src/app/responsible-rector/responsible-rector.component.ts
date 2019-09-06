import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsible-rector',
  templateUrl: './responsible-rector.component.html',
  styleUrls: ['./responsible-rector.component.scss']
})
export class ResponsibleRectorComponent implements OnInit {

  @Input() professor: object;
  constructor() { }

  ngOnInit() {
  }

}
