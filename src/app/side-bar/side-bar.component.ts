import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public authUser: User;

  private SIDEBARLOGO = require('../../assets/images/SINGIDUNUM_LOGO.png');
  private PREGLEDSTUDENATA = require('../../assets/images/students-icon.svg');
  private PANELICON = require('../../assets/images/panel-icon.png');
  private KALENDAR = require('../../assets/images/calendar-icon-white-8.jpg');
  private PORUKA = require('../../assets/images/Mail-Icon-white.png');
  private AVATAR = require('../../assets/images/placeholder-profile-avatar.png');

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.currentUser.subscribe((user) => {
      this.authUser = user;
    })
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }
}
