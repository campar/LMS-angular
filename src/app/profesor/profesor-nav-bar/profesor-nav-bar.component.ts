import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-nav-bar',
  templateUrl: './profesor-nav-bar.component.html',
  styleUrls: ['./profesor-nav-bar.component.scss']
})
export class ProfesorNavBarComponent implements OnInit {

  private FILTER = require('../../../assets/images/filter-icon.png');

  constructor() { }

  ngOnInit() {
  }

}
