import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregled-studenata',
  templateUrl: './pregled-studenata.component.html',
  styleUrls: ['./pregled-studenata.component.scss']
})
export class PregledStudenataComponent implements OnInit {
  private FILTER = require('../../../assets/images/filter-icon.png');

  constructor() { }

  ngOnInit() {
  }

}
