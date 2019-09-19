import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  private SIDEBARLOGO = require('../../assets/images/SINGIDUNUM_LOGO.png');
  private PREGLEDSTUDENATA = require('../../assets/images/students-icon.svg');
  private PANELICON = require('../../assets/images/panel-icon.png');
  private KALENDAR = require('../../assets/images/calendar-icon-white-8.jpg');
  private PORUKA = require('../../assets/images/Mail-Icon-white.png');
  private AVATAR = require('../../assets/images/placeholder-profile-avatar.png');




  constructor() { }

  ngOnInit() {
  }

}
