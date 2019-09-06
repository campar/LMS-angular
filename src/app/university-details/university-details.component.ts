import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  @ViewChild('chatBox', {static: false}) chatBox: ElementRef;
  @ViewChild('universityMain', {static: false}) universityMain: ElementRef;

  @ViewChild('chatSideBar', {static: false}) chatSideBar: ElementRef;
  // treba RxJS ja mislim
  faculties$: object;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // // console.log('ruta',this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');

    this.data.getFacultiesByUniversityId(id).subscribe(
        data => this.faculties$ = data
      );
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
