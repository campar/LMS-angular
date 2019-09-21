import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models';

@Component({
  selector: 'app-responsible-person',
  templateUrl: './responsible-person.component.html',
  styleUrls: ['./responsible-person.component.scss']
})
export class ResponsiblePersonComponent implements OnInit {

  @Input() type: string;
  @Input() phoneNumber: string;
  @Input() person: User;

  constructor() { }

  ngOnInit() {
  }

}
