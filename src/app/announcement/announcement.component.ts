import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input() notifications;
  constructor() { }

  ngOnInit() {
    console.log(this.notifications);
  }

}
