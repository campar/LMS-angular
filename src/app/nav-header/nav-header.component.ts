import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  public authUser: User;

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
