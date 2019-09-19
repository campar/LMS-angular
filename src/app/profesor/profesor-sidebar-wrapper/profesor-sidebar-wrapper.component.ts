import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-profesor-sidebar-wrapper',
  templateUrl: './profesor-sidebar-wrapper.component.html',
  styleUrls: ['./profesor-sidebar-wrapper.component.scss']
})
export class ProfesorSidebarWrapperComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
}
