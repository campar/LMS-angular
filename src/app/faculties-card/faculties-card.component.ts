import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculties-card',
  templateUrl: './faculties-card.component.html',
  styleUrls: ['./faculties-card.component.scss']
})
export class FacultiesCardComponent implements OnInit {

  private ANNOUNCEMENT = require('../../assets/images/megaphone.png');

  constructor() { }

  ngOnInit() {
  }

}
