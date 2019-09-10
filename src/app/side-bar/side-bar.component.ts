import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  private SIDEBARLOGO = require('../../assets/images/SINGIDUNUM_LOGO.png');

  private PREGLEDSTUDENATA = require('../../assets/images/students-icon.svg');

  constructor() { }

  ngOnInit() {
  }

}
