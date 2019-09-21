import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from '../_models/university';
import { UniversitiesService } from '../_services/univerisities.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  @ViewChild('chatBox', { static: false }) chatBox: ElementRef;
  @ViewChild('universityMain', { static: false }) universityMain: ElementRef;
  @ViewChild('chatSideBar', { static: false }) chatSideBar: ElementRef;

  public university: University;

  constructor(private universitiesService: UniversitiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.universitiesService.getUniversity(id).subscribe(
      data => {
        this.university = data
      });
  }

  open() {
    if (this.chatBox.nativeElement.checked === false) {
      console.log('zaklopen je');
      this.universityMain.nativeElement.style.marginRight = '0';
      this.chatSideBar.nativeElement.style.width = '0';

    } else {
      this.universityMain.nativeElement.style.marginRight = '300px';
      this.chatSideBar.nativeElement.style.width = '300px';
    }
  }
}
